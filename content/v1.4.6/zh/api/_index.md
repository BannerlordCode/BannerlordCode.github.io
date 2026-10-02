---
title: "API 参考 — 按任务找入口"
description: "v1.4.6 的 API 分区：39 个源码模块、4709 个 public 类型。先选层与模块，再进类型页；各模块页底部保留完整 A–Z 目录用于补查。"
---
# API 参考：按任务找入口

> 这不是签名墙。1.4.6 的源码顶层目录就是模块目录，本站的 api 目录名与之一一对应（`TaleWorlds.CampaignSystem` → `campaignsystem`）。先确定层次与模块，再进类型页。

## 运行时层次

### Foundation — 创建、注册、身份与存档

- [core](./core/) — `TaleWorlds.Core` · 229 个类型
- [core-viewmodelcollection](./core-viewmodelcollection/) — `TaleWorlds.Core.ViewModelCollection` · 45 个类型
- [library](./library/) — `TaleWorlds.Library` · 191 个类型
- [modulemanager](./modulemanager/) — `TaleWorlds.ModuleManager` · 8 个类型
- [objectsystem](./objectsystem/) — `TaleWorlds.ObjectSystem` · 16 个类型
- [savesystem](./savesystem/) — `TaleWorlds.SaveSystem` · 57 个类型
- [localization](./localization/) — `TaleWorlds.Localization` · 21 个类型
- [dotnet](./dotnet/) — `TaleWorlds.DotNet` · 29 个类型

### Campaign — 持久世界与模式实现

- [campaignsystem](./campaignsystem/) — `TaleWorlds.CampaignSystem` · 1174 个类型
- [campaignsystem-fastmode](./campaignsystem-fastmode/) — `TaleWorlds.CampaignSystem.FastMode` · 2 个类型
- [campaignsystem-viewmodelcollection](./campaignsystem-viewmodelcollection/) — `TaleWorlds.CampaignSystem.ViewModelCollection` · 349 个类型
- [campaignsystem-viewmodelcollection-birthanddeath](./campaignsystem-viewmodelcollection-birthanddeath/) — `TaleWorlds.CampaignSystem.ViewModelCollection.BirthAndDeath` · 2 个类型
- [sandbox](./sandbox/) — `SandBox` · 226 个类型
- [sandbox-gauntletui](./sandbox-gauntletui/) — `SandBox.GauntletUI` · 75 个类型
- [sandbox-view](./sandbox-view/) — `SandBox.View` · 118 个类型
- [sandbox-viewmodelcollection](./sandbox-viewmodelcollection/) — `SandBox.ViewModelCollection` · 93 个类型
- [storymode](./storymode/) — `StoryMode` · 67 个类型
- [storymode-gauntletui](./storymode-gauntletui/) — `StoryMode.GauntletUI` · 72 个类型
- [storymode-view](./storymode-view/) — `StoryMode.View` · 7 个类型
- [storymode-viewmodelcollection](./storymode-viewmodelcollection/) — `StoryMode.ViewModelCollection` · 4 个类型
- [achievementsystem](./achievementsystem/) — `TaleWorlds.AchievementSystem` · 4 个类型
- [activitysystem](./activitysystem/) — `TaleWorlds.ActivitySystem` · 6 个类型

### Mission — 任务与战斗

- [mountandblade](./mountandblade/) — `TaleWorlds.MountAndBlade` · 741 个类型
- [mountandblade-custombattle](./mountandblade-custombattle/) — `TaleWorlds.MountAndBlade.CustomBattle` · 39 个类型
- [mountandblade-view](./mountandblade-view/) — `TaleWorlds.MountAndBlade.View` · 167 个类型
- [mountandblade-viewmodelcollection](./mountandblade-viewmodelcollection/) — `TaleWorlds.MountAndBlade.ViewModelCollection` · 132 个类型
- [mountandblade-steamworkshop](./mountandblade-steamworkshop/) — `TaleWorlds.MountAndBlade.SteamWorkshop` · 5 个类型

### UI — 屏幕、输入与 Gauntlet 控件

- [screensystem](./screensystem/) — `TaleWorlds.ScreenSystem` · 8 个类型
- [inputsystem](./inputsystem/) — `TaleWorlds.InputSystem` · 14 个类型
- [engine](./engine/) — `TaleWorlds.Engine` · 124 个类型
- [engine-gauntletui](./engine-gauntletui/) — `TaleWorlds.Engine.GauntletUI` · 8 个类型
- [gauntletui](./gauntletui/) — `TaleWorlds.GauntletUI` · 96 个类型
- [gauntletui-data](./gauntletui-data/) — `TaleWorlds.GauntletUI.Data` · 15 个类型
- [gauntletui-extrawidgets](./gauntletui-extrawidgets/) — `TaleWorlds.GauntletUI.ExtraWidgets` · 26 个类型
- [gauntletui-prefabsystem](./gauntletui-prefabsystem/) — `TaleWorlds.GauntletUI.PrefabSystem` · 27 个类型
- [mountandblade-gauntletui](./mountandblade-gauntletui/) — `TaleWorlds.MountAndBlade.GauntletUI` · 62 个类型
- [mountandblade-gauntletui-widgets](./mountandblade-gauntletui-widgets/) — `TaleWorlds.MountAndBlade.GauntletUI.Widgets` · 400 个类型

### 其它

- [twodimension](./twodimension/) — `TaleWorlds.TwoDimension` · 49 个类型
- [starter-library](./starter-library/) — `TaleWorlds.Starter.Library` · 1 个类型

## 全部模块

| 模块目录 | 文档分区 | public 类型数 | 源码目录 |
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

## 阅读顺序

1. 先读 [版本首页](../) 确认你在哪一层，再读 [SDK 分层概览](../architecture/sdk-overview/)。
2. 用上面的「运行时层次」挑模块，进入模块页看导览与核心入口类型。
3. 在模块页底部的 A–Z 目录里找到类型，点进类型页看 `**Namespace:**` / `**Type:**` / `**File:**` 与公开成员签名表。
4. 每个类型页都会给出「基类」与「同命名空间」链接，跨模块依赖沿这些链接回溯。

## 参见

- ↑ [版本首页](../)
- ↔ [架构总览](../architecture/)
- ↔ [跨版本类对比](../../../versions/)
