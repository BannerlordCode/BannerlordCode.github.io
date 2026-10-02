---
title: "Gui — 界面：ScreenSystem、Gauntlet 与二维绘制"
description: "TaleWorlds.ScreenSystem / GauntletUI / TwoDimension 所在的目录。目前 3 页，均在中文树。"
---
# Gui — 界面：ScreenSystem、Gauntlet 与二维绘制

三个命名空间合并成一个桶：

| 命名空间 | `.cs` 数量 | 负责什么 |
| --- | ---: | --- |
| `TaleWorlds.ScreenSystem` | 8 | 界面栈：压屏、弹屏、层与输入限制 |
| `TaleWorlds.GauntletUI` | 3 | 手柄导航的上下文 |
| `TaleWorlds.TwoDimension` | 54 | 字体、纹理、`Brush`、二维绘制 |

合并的理由是它们在模组作者眼里是同一件事：做一个界面。真正写界面的路径是 `ScreenBase`（生命周期）→ `ScreenLayer`（挂上去）→ `ScreenManager`（推栈）→ `GauntletLayer`（加载 XML 绑定 ViewModel）。前三步在 `gui/`，最后一步的 `GauntletLayer` **不在这里** —— 它的命名空间是 `TaleWorlds.Engine.GauntletUI`，落在 [engine](../engine/)。四层关系见 [界面栈](../../architecture/ui-stack)。

`TaleWorlds.ScreenSystem` 只有 8 个 `.cs`，但控件本身不在这个命名空间里 —— 控件属于 `TaleWorlds.GauntletUI` 的 XML 预制体，绑定模型在 [viewmodel](../viewmodel/)。

## 本区页面（3）

| 页面 | 讲的是什么 |
| --- | --- |
| [ScreenManager](./ScreenManager) | 压栈与弹栈界面，持有 layer 栈 |
| [ScreenBase](./ScreenBase) | 自定义界面所派生的基类 |
| [ScreenLayer](./ScreenLayer) | 界面栈中的透明覆盖层 |

这 3 页正好是一条能走通的路径。英文树里没有本区页面。

## 尚未收录

`TaleWorlds.ScreenSystem` 剩下的 5 个类型没有页面：`GlobalLayer`（全局常驻层）、`CursorType`、`InputRestrictions`、`ScreenComponent`、`IScreenManagerEngineConnection`。以及：二维绘制那一族 —— `Font`、`ITexture`、`PrimitivePolygonMaterial`、`MaterialPool`、`EditableText`、`BitmapFontCharacter`、`TextHelper`；以及 `TaleWorlds.GauntletUI` 的 `IGamepadNavigationContext` 与它的默认实现。

按规模算这个桶约 72 个有文档的类型，现在 3 个。

## 相邻目录

[viewmodel](../viewmodel/) · [engine](../engine/) · [core](../core/) · [core-extra](../core-extra/) · [campaign](../campaign/) · [campaign-ext](../campaign-ext/) · [save-system](../save-system/) · [mission](../mission/) · [mission-ext](../mission-ext/) · [sandbox](../sandbox/) · [custombattle](../custombattle/) · [system](../system/) · [network](../network/) · [modulemanager](../modulemanager/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

## 参见

- ↑ [版本首页](../../)
- ↑ [API 参考](../)
- ↔ [架构总览](../../architecture/)
- ↘ [界面栈](../../architecture/ui-stack)