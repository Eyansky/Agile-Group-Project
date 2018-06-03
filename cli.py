"""
Main CLI App
"""
import click


@click.command()
def cli():
    """CLI Method"""
    click.echo("Hello World")
