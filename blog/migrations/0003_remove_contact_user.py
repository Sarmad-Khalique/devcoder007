# Generated by Django 4.0.4 on 2022-04-28 09:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_contact'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='contact',
            name='user',
        ),
    ]
