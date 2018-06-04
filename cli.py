"""
Main CLI App
"""
import os
import json
import click
import requests
from terminaltables import SingleTable

URL = "http://127.0.0.1:5000/"


@click.group()
@click.version_option()
def cli():
    """
    ✨✨✨✨ Tech Vikings CLI ✨✨✨✨

    """


@cli.group()
def user():
    """User Functions."""


@user.command('register')
def register_user():
    """Creates a new user."""
    click.clear()
    click.secho('  New User Registration  ', bg='green', fg='white', bold=True)
    username = click.prompt(click.style(
        '>> What is your username? ', fg='yellow'), type=str)
    password = click.prompt(click.style('>> What is your password? ',
                                        fg='yellow'),
                            type=str, hide_input=True,
                            confirmation_prompt=True)

    # Get the payload
    payload = {
        "username": username,
        "password": password
    }
    headers = {'content-type': 'application/json'}

    result = requests.post(
        URL + "register", data=json.dumps(payload), headers=headers)
    output = result.json()
    if output["status"] == "success":
        click.secho('  SUCCESS!  ', bg='green', fg='white', bold=True)
        click.secho(output["message"], bg='white', fg='black', bold=True)
    # If errorpip
    else:
        click.secho('  SORRY!  ', bg='red', fg='white', bold=True)
        click.secho(output["message"], bg='white', fg='black', bold=True)


@user.command('login')
def login_user():
    """Logs in a user."""
    click.clear()
    click.secho('  User Login  ', bg='green', fg='white', bold=True)
    username = click.prompt(click.style(
        '>> What is your username? ', fg='yellow'), type=str)
    password = click.prompt(click.style(
        '>> What is your password? ', fg='yellow'), type=str, hide_input=True)

    # Get the payload
    payload = {
        "username": username,
        "password": password
    }
    headers = {'content-type': 'application/json'}

    result = requests.post(
        URL + "login", data=json.dumps(payload), headers=headers)
    output = result.json()
    if output["status"] == "success":
        click.secho('  SUCCESS!  ', bg='green', fg='white', bold=True)
        click.secho(output["message"], bg='white', fg='black', bold=True)
        file = open('TOKEN', 'w')
        file.write(output["token"])
        file.close()

    # If error
    else:
        click.secho('  SORRY!  ', bg='red', fg='white', bold=True)
        click.secho(output["message"], bg='white', fg='black', bold=True)


@user.command('logout')
def logout_user():
    """Logs out a user."""
    click.clear()
    # headers = {
    #     'Authorization': 'Bearer {}'.format(TOKEN),
    # }
    # result = requests.post(
    #     URL + "logout", headers=headers)

    # output = result.json()
    os.remove('TOKEN')
    # if output["status"] == "success":
    #     click.secho('  SUCCESS!  ', bg='green', fg='white', bold=True)
    #     click.secho(output["message"], bg='white', fg='black', bold=True)
    # # If error
    # else:
    #     click.secho('  SORRY!  ', bg='red', fg='white', bold=True)
    #     click.secho(output["msg"], bg='white', fg='black', bold=True)


@cli.group()
def comment():
    """User Comment Functions."""


@comment.command('create')
def create_comment():
    """Creates a new user comment."""
    click.clear()
    click.secho('  New User Registration  ', bg='green', fg='white', bold=True)
    the_comment = click.prompt(click.style(
        '>> What is your comment? ', fg='yellow'), type=str)
    file = open('TOKEN', 'r')
    token = file.read()

    # Get the payload
    payload = {
        "username": the_comment
    }
    headers = {
        'Authorization': 'Bearer {}'.format(token),
        'content-type': 'application/json'
    }

    result = requests.post(
        URL + "comments",
        data=json.dumps(payload),
        headers=headers
    )
    output = result.json()

    if output["msg"] != "Token has expired":
        click.secho('  SUCCESS!  ', bg='green', fg='white', bold=True)
        click.secho(output["msg"], bg='white', fg='black', bold=True)
    # If errorpip
    else:
        click.secho('  SORRY!  ', bg='red', fg='white', bold=True)
        click.secho(output["msg"], bg='white', fg='black', bold=True)


@comment.command('get')
def get_comments():
    """Gets all users comments."""
    click.clear()
    click.secho('  Get all user comments  ', bg='green', fg='white', bold=True)
    file = open('TOKEN', 'r')
    token = file.read()

    headers = {
        'Authorization': 'Bearer {}'.format(token)
    }

    result = requests.get(
        URL + "comments",
        headers=headers
    )
    output = result.json()

    if output["status"] == "success":
        click.secho('  Your comments!  ', bg='green', fg='white', bold=True)
        print(output["comments"])
    # If errorpip
    else:
        click.secho('  SORRY!  ', bg='red', fg='white', bold=True)
        click.secho(output["msg"], bg='white', fg='black', bold=True)
