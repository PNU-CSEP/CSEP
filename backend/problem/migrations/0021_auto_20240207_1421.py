# Generated by Django 3.2.9 on 2024-02-07 14:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('problem', '0020_auto_20240207_1312'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='problem',
            name='curr_week_solver',
        ),
        migrations.RemoveField(
            model_name='problem',
            name='last_week_solver',
        ),
    ]