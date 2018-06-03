"""
Sets up our Tech Viking's CLI
"""

from setuptools import setup

setup(
    name="Tech Vikings",
    version='0.1',
    py_modules=['cli'],
    install_requires=[
        'Click',
    ],
    entry_points='''
        [console_scripts]
        vikings=cli:cli
    ''',
)
