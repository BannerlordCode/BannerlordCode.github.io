---
title: "Mission — mod entry classes only"
description: "This directory holds **only the 5 entry classes a mod author actually subclasses**. It is a deliberately small entry buc"
---
# Mission — mod entry classes only

**This directory holds **only the 5 entry classes a mod author actually subclasses**. It is a deliberately small entry bucket, not the full API surface.**

The whole `TaleWorlds.MountAndBlade` type surface lives in [Mission-Ext](../mission-ext/). If what you need is not here, **stop looking here** and go straight to Mission-Ext.

These five were picked by name out of `mission-ext/` rather than by a namespace rule, for one reason: keeping URLs like 1.4.5's `api/mission/Mission` aligned for cross-version comparison.

## When to go to the other directory

| What you want to do | Go to |
| --- | --- |
| Subclass and override an entry class | **this page** |
| Look up everything else in battle/mission logic | [Mission-Ext](../mission-ext/) |
| Look up campaign entities and state | [Campaign](../campaign/) |
| Look up runtime facilities beyond module loading | [Core-Extra](../core-extra/) |

The reverse link exists too: the `Mission-Ext` index page points back here.

## Pages in this area (0)

_No pages yet. Leaf pages are generated from the type inventory and will appear here._

## Sibling areas

[core](../core/) · [core-extra](../core-extra/) · [mission-ext](../mission-ext/) · [campaign](../campaign/) · [campaign-ext](../campaign-ext/) · [gui](../gui/) · [save-system](../save-system/) · [viewmodel](../viewmodel/) · [localization](../localization/) · [engine](../engine/) · [system](../system/) · [custombattle](../custombattle/) · [modulemanager](../modulemanager/) · [network](../network/) · [sandbox](../sandbox/) · [storymode](../storymode/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

## See also

- ↑ [版本首页](../../)
- ↑ [API 参考](../)
- ↔ [架构总览](../../architecture/)
- ↘ [module-system](../../architecture/module-system)
