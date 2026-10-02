---
title: "API Reference — start from the task"
description: "The v1.4.6 API sections: 39 source modules and 4709 public types. Pick a layer and module first, then open a type page; every module index keeps a full A–Z catalog for lookups."
---
# API Reference: start from the task

> This is not a signature wall. In 1.4.6 every top-level source directory is a module, and each API section here maps one to one onto it (`TaleWorlds.CampaignSystem` → `campaignsystem`). Decide the layer and the module first, then open a type page.

## Runtime layers

### Foundation — creation, registration, identity and save

- [core](./core/) — `TaleWorlds.Core` · 229 types
- [core-viewmodelcollection](./core-viewmodelcollection/) — `TaleWorlds.Core.ViewModelCollection` · 45 types
- [library](./library/) — `TaleWorlds.Library` · 191 types
- [modulemanager](./modulemanager/) — `TaleWorlds.ModuleManager` · 8 types
- [objectsystem](./objectsystem/) — `TaleWorlds.ObjectSystem` · 16 types
- [savesystem](./savesystem/) — `TaleWorlds.SaveSystem` · 57 types
- [localization](./localization/) — `TaleWorlds.Localization` · 21 types
- [dotnet](./dotnet/) — `TaleWorlds.DotNet` · 29 types

### Campaign — the persistent world and its modes

- [campaignsystem](./campaignsystem/) — `TaleWorlds.CampaignSystem` · 1174 types
- [campaignsystem-fastmode](./campaignsystem-fastmode/) — `TaleWorlds.CampaignSystem.FastMode` · 2 types
- [campaignsystem-viewmodelcollection](./campaignsystem-viewmodelcollection/) — `TaleWorlds.CampaignSystem.ViewModelCollection` · 349 types
- [campaignsystem-viewmodelcollection-birthanddeath](./campaignsystem-viewmodelcollection-birthanddeath/) — `TaleWorlds.CampaignSystem.ViewModelCollection.BirthAndDeath` · 2 types
- [sandbox](./sandbox/) — `SandBox` · 226 types
- [sandbox-gauntletui](./sandbox-gauntletui/) — `SandBox.GauntletUI` · 75 types
- [sandbox-view](./sandbox-view/) — `SandBox.View` · 118 types
- [sandbox-viewmodelcollection](./sandbox-viewmodelcollection/) — `SandBox.ViewModelCollection` · 93 types
- [storymode](./storymode/) — `StoryMode` · 67 types
- [storymode-gauntletui](./storymode-gauntletui/) — `StoryMode.GauntletUI` · 72 types
- [storymode-view](./storymode-view/) — `StoryMode.View` · 7 types
- [storymode-viewmodelcollection](./storymode-viewmodelcollection/) — `StoryMode.ViewModelCollection` · 4 types
- [achievementsystem](./achievementsystem/) — `TaleWorlds.AchievementSystem` · 4 types
- [activitysystem](./activitysystem/) — `TaleWorlds.ActivitySystem` · 6 types

### Mission — missions and battle

- [mountandblade](./mountandblade/) — `TaleWorlds.MountAndBlade` · 741 types
- [mountandblade-custombattle](./mountandblade-custombattle/) — `TaleWorlds.MountAndBlade.CustomBattle` · 39 types
- [mountandblade-view](./mountandblade-view/) — `TaleWorlds.MountAndBlade.View` · 167 types
- [mountandblade-viewmodelcollection](./mountandblade-viewmodelcollection/) — `TaleWorlds.MountAndBlade.ViewModelCollection` · 132 types
- [mountandblade-steamworkshop](./mountandblade-steamworkshop/) — `TaleWorlds.MountAndBlade.SteamWorkshop` · 5 types

### UI — screens, input and Gauntlet widgets

- [screensystem](./screensystem/) — `TaleWorlds.ScreenSystem` · 8 types
- [inputsystem](./inputsystem/) — `TaleWorlds.InputSystem` · 14 types
- [engine](./engine/) — `TaleWorlds.Engine` · 124 types
- [engine-gauntletui](./engine-gauntletui/) — `TaleWorlds.Engine.GauntletUI` · 8 types
- [gauntletui](./gauntletui/) — `TaleWorlds.GauntletUI` · 96 types
- [gauntletui-data](./gauntletui-data/) — `TaleWorlds.GauntletUI.Data` · 15 types
- [gauntletui-extrawidgets](./gauntletui-extrawidgets/) — `TaleWorlds.GauntletUI.ExtraWidgets` · 26 types
- [gauntletui-prefabsystem](./gauntletui-prefabsystem/) — `TaleWorlds.GauntletUI.PrefabSystem` · 27 types
- [mountandblade-gauntletui](./mountandblade-gauntletui/) — `TaleWorlds.MountAndBlade.GauntletUI` · 62 types
- [mountandblade-gauntletui-widgets](./mountandblade-gauntletui-widgets/) — `TaleWorlds.MountAndBlade.GauntletUI.Widgets` · 400 types

### Other

- [twodimension](./twodimension/) — `TaleWorlds.TwoDimension` · 49 types
- [starter-library](./starter-library/) — `TaleWorlds.Starter.Library` · 1 types

## All modules

| Module | Section | Public types | Source directory |
| --- | --- | --- | --- |
| `TaleWorlds.AchievementSystem` | [achievementsystem](./achievementsystem/) | 4 | `bannerlord-1.4.6/TaleWorlds.AchievementSystem/` |
| `TaleWorlds.ActivitySystem` | [activitysystem](./activitysystem/) | 6 | `bannerlord-1.4.6/TaleWorlds.ActivitySystem/` |
| `TaleWorlds.CampaignSystem` | [campaignsystem](./campaignsystem/) | 1174 | `bannerlord-1.4.6/TaleWorlds.CampaignSystem/` |
| `TaleWorlds.CampaignSystem.FastMode` | [campaignsystem-fastmode](./campaignsystem-fastmode/) | 2 | `bannerlord-1.4.6/TaleWorlds.CampaignSystem.FastMode/` |
| `TaleWorlds.CampaignSystem.ViewModelCollection` | [campaignsystem-viewmodelcollection](./campaignsystem-viewmodelcollection/) | 349 | `bannerlord-1.4.6/TaleWorlds.CampaignSystem.ViewModelCollection/` |
| `TaleWorlds.CampaignSystem.ViewModelCollection.BirthAndDeath` | [campaignsystem-viewmodelcollection-birthanddeath](./campaignsystem-viewmodelcollection-birthanddeath/) | 2 | `bannerlord-1.4.6/TaleWorlds.CampaignSystem.ViewModelCollection.BirthAndDeath/` |
| `TaleWorlds.Core` | [core](./core/) | 229 | `bannerlord-1.4.6/TaleWorlds.Core/` |
| `TaleWorlds.Core.ViewModelCollection` | [core-viewmodelcollection](./core-viewmodelcollection/) | 45 | `bannerlord-1.4.6/TaleWorlds.Core.ViewModelCollection/` |
| `TaleWorlds.DotNet` | [dotnet](./dotnet/) | 29 | `bannerlord-1.4.6/TaleWorlds.DotNet/` |
| `TaleWorlds.Engine` | [engine](./engine/) | 124 | `bannerlord-1.4.6/TaleWorlds.Engine/` |
| `TaleWorlds.Engine.GauntletUI` | [engine-gauntletui](./engine-gauntletui/) | 8 | `bannerlord-1.4.6/TaleWorlds.Engine.GauntletUI/` |
| `TaleWorlds.GauntletUI` | [gauntletui](./gauntletui/) | 96 | `bannerlord-1.4.6/TaleWorlds.GauntletUI/` |
| `TaleWorlds.GauntletUI.Data` | [gauntletui-data](./gauntletui-data/) | 15 | `bannerlord-1.4.6/TaleWorlds.GauntletUI.Data/` |
| `TaleWorlds.GauntletUI.ExtraWidgets` | [gauntletui-extrawidgets](./gauntletui-extrawidgets/) | 26 | `bannerlord-1.4.6/TaleWorlds.GauntletUI.ExtraWidgets/` |
| `TaleWorlds.GauntletUI.PrefabSystem` | [gauntletui-prefabsystem](./gauntletui-prefabsystem/) | 27 | `bannerlord-1.4.6/TaleWorlds.GauntletUI.PrefabSystem/` |
| `TaleWorlds.InputSystem` | [inputsystem](./inputsystem/) | 14 | `bannerlord-1.4.6/TaleWorlds.InputSystem/` |
| `TaleWorlds.Library` | [library](./library/) | 191 | `bannerlord-1.4.6/TaleWorlds.Library/` |
| `TaleWorlds.Localization` | [localization](./localization/) | 21 | `bannerlord-1.4.6/TaleWorlds.Localization/` |
| `TaleWorlds.ModuleManager` | [modulemanager](./modulemanager/) | 8 | `bannerlord-1.4.6/TaleWorlds.ModuleManager/` |
| `TaleWorlds.MountAndBlade` | [mountandblade](./mountandblade/) | 741 | `bannerlord-1.4.6/TaleWorlds.MountAndBlade/` |
| `TaleWorlds.MountAndBlade.CustomBattle` | [mountandblade-custombattle](./mountandblade-custombattle/) | 39 | `bannerlord-1.4.6/TaleWorlds.MountAndBlade.CustomBattle/` |
| `TaleWorlds.MountAndBlade.GauntletUI` | [mountandblade-gauntletui](./mountandblade-gauntletui/) | 62 | `bannerlord-1.4.6/TaleWorlds.MountAndBlade.GauntletUI/` |
| `TaleWorlds.MountAndBlade.GauntletUI.Widgets` | [mountandblade-gauntletui-widgets](./mountandblade-gauntletui-widgets/) | 400 | `bannerlord-1.4.6/TaleWorlds.MountAndBlade.GauntletUI.Widgets/` |
| `TaleWorlds.MountAndBlade.SteamWorkshop` | [mountandblade-steamworkshop](./mountandblade-steamworkshop/) | 5 | `bannerlord-1.4.6/TaleWorlds.MountAndBlade.SteamWorkshop/` |
| `TaleWorlds.MountAndBlade.View` | [mountandblade-view](./mountandblade-view/) | 167 | `bannerlord-1.4.6/TaleWorlds.MountAndBlade.View/` |
| `TaleWorlds.MountAndBlade.ViewModelCollection` | [mountandblade-viewmodelcollection](./mountandblade-viewmodelcollection/) | 132 | `bannerlord-1.4.6/TaleWorlds.MountAndBlade.ViewModelCollection/` |
| `TaleWorlds.ObjectSystem` | [objectsystem](./objectsystem/) | 16 | `bannerlord-1.4.6/TaleWorlds.ObjectSystem/` |
| `SandBox` | [sandbox](./sandbox/) | 226 | `bannerlord-1.4.6/SandBox/` |
| `SandBox.GauntletUI` | [sandbox-gauntletui](./sandbox-gauntletui/) | 75 | `bannerlord-1.4.6/SandBox.GauntletUI/` |
| `SandBox.View` | [sandbox-view](./sandbox-view/) | 118 | `bannerlord-1.4.6/SandBox.View/` |
| `SandBox.ViewModelCollection` | [sandbox-viewmodelcollection](./sandbox-viewmodelcollection/) | 93 | `bannerlord-1.4.6/SandBox.ViewModelCollection/` |
| `TaleWorlds.SaveSystem` | [savesystem](./savesystem/) | 57 | `bannerlord-1.4.6/TaleWorlds.SaveSystem/` |
| `TaleWorlds.ScreenSystem` | [screensystem](./screensystem/) | 8 | `bannerlord-1.4.6/TaleWorlds.ScreenSystem/` |
| `TaleWorlds.Starter.Library` | [starter-library](./starter-library/) | 1 | `bannerlord-1.4.6/TaleWorlds.Starter.Library/` |
| `StoryMode` | [storymode](./storymode/) | 67 | `bannerlord-1.4.6/StoryMode/` |
| `StoryMode.GauntletUI` | [storymode-gauntletui](./storymode-gauntletui/) | 72 | `bannerlord-1.4.6/StoryMode.GauntletUI/` |
| `StoryMode.View` | [storymode-view](./storymode-view/) | 7 | `bannerlord-1.4.6/StoryMode.View/` |
| `StoryMode.ViewModelCollection` | [storymode-viewmodelcollection](./storymode-viewmodelcollection/) | 4 | `bannerlord-1.4.6/StoryMode.ViewModelCollection/` |
| `TaleWorlds.TwoDimension` | [twodimension](./twodimension/) | 49 | `bannerlord-1.4.6/TaleWorlds.TwoDimension/` |

## Reading order

1. Read the [version home](../) to place yourself in a layer, then the [SDK layering overview](../architecture/sdk-overview/).
2. Pick a module from the layers above and read its tour and core entry types.
3. Find the type in that module’s A–Z catalog and open its page for the `**Namespace:**` / `**Type:**` / `**File:**` metadata and the public member table.
4. Every type page links its base type and same-namespace siblings, so cross-module dependencies are one hop away.

## See Also

- ↑ [Version home](../)
- ↔ [Architecture](../architecture/)
- ↔ [Cross-version class diff](../../../versions/)
