---
title: "API Reference — start from the task"
description: "The v1.4.7 API is split into 19 subsystem directories: one type belongs to exactly one directory, and same-directory name collisions use Namespace__Type."
---
# API Reference — start from the task

This is not a wall of signatures. Decide what you are doing, enter the matching directory below, then open a type page. **A type lives in exactly one directory** — the 1.4.5 tree had the same type name in two directories 2,199 times, which is why clicking through it felt random and one-way. v1.4.7 fixes that.

## Directories

| Directory | Pages |
| --- | ---: |
| [core](core/) | 0 |  — Entry classes (module loading)
| [core-extra](core-extra/) | 54 |
| [mission](mission/) | 0 |  — Entry classes (what mods subclass)
| [mission-ext](mission-ext/) | 518 |
| [campaign](campaign/) | 190 |
| [campaign-ext](campaign-ext/) | 71 |
| [gui](gui/) | 72 |
| [save-system](save-system/) | 25 |
| [viewmodel](viewmodel/) | 357 |
| [localization](localization/) | 24 |
| [engine](engine/) | 41 |
| [system](system/) | 6 |
| [custombattle](custombattle/) | 21 |
| [modulemanager](modulemanager/) | 6 |
| [network](network/) | 6 |
| [sandbox](sandbox/) | 321 |
| [storymode](storymode/) | 74 |
| [activitysystem](activitysystem/) | 6 |
| [achievementsystem](achievementsystem/) | 4 |

> **There is no `gameplay/` and no `navigationsystem/` directory.** The first was split into `sandbox` and `storymode` (the 1.4.5 directory was semantically mixed); the second has no public types in 1.4.7 and resolves into `core-extra`. See [Version Delta](../architecture/version-delta).

> `mission/` and `core/` are deliberately small and hold only mod entry classes; the full `TaleWorlds.MountAndBlade` and foundation surfaces are in `mission-ext/` and `core-extra/`.

## Reading order

1. [Architecture hub](../architecture/) — establish which layer you are in.
2. The directory table above — enter the matching subsystem.
3. The directory index page — it lists every leaf in that area and links back to its siblings.
4. The type page — mental model, when to use it, when not to, and the risks.

## See also

- ↑ [Version home](../)
- ↔ [Architecture overview](../architecture/)
- ↘ [Cross-version class comparison](../../../versions/)
