---
title: "gui 桶：屏幕栈、Gauntlet 控件与二维绘制"
description: "TaleWorlds.ScreenSystem、TaleWorlds.GauntletUI（含 .BaseTypes / .Layout / .Data / .GauntletInput / .GamepadNavigation）与 TaleWorlds.TwoDimension 三个命名空间落在同一个桶：屏幕栈、Gauntlet 控件树、字体与贴图绘制。已手写 5 张类页。"
---
# gui 桶：屏幕栈、Gauntlet 控件与二维绘制

这个桶把三个命名空间放在一起，因为它们是同一条调用链的三个环节：`TaleWorlds.ScreenSystem` 管**屏幕栈**（推屏、弹屏、帧循环、输入屏蔽），`TaleWorlds.GauntletUI` 及其子命名空间管**控件树与布局**（`.BaseTypes` 放 `Widget` 基类，`.Layout` 放布局，`.Data` 放 movie 标识，`.GauntletInput` 与 `.GamepadNavigation` 放输入与手柄焦点），`TaleWorlds.TwoDimension` 管**底层绘制**（字体、贴图、富文本）。1.4.6 里它们分别是 9、186、58 个 `.cs`。

**注意别去 engine 桶找控件。** 1.4.6 的屏幕栈全在 `TaleWorlds.ScreenSystem`，不在 `MountAndBlade`；`GauntletLayer` 这类渲染实现则在 [engine](../engine/) 桶，因为它的命名空间是 `TaleWorlds.Engine.GauntletUI`（前缀 `TaleWorlds.Engine` 命中，而不是 `TaleWorlds.GauntletUI`）。名字里都带 Gauntlet，分属两个桶。

## 已手写的类页（5 张）

- [ScreenManager](./ScreenManager) — 全局静态屏幕栈：`PushScreen` / `PopScreen` 决定界面顺序，每帧驱动所有 `ScreenBase` 的 tick 与输入分发，并处理焦点。自定义界面流程从它开始。
- [ScreenBase](./ScreenBase) — 所有界面的抽象基类：持有一组 `ScreenLayer` 与 `ScreenComponent`，把引擎的推送 / 暂停 / 帧循环翻译成 `OnXxx` 虚方法。`SandBox` 与 `StoryMode` 的大量官方界面继承它。（`OnXxx` 是钩子族的简写，不是类型名；真实类型是各个 `*Layer` / `*Component` / `*Screen` 子类。）
- [ScreenLayer](./ScreenLayer) — 「一段有独立绘制顺序与输入权限的界面内容」的抽象形状，地图界面、任务结算、加载画面都是它的派生类，`ScreenBase` 的层集合装的元素类型就是它。基类本身不画任何一个像素，它提供的是一个构造期定死的名字、一个决定层叠顺序的输入限制集合，以及一组帧回调钩子。
- [ScreenComponent](./ScreenComponent) — 整个源码文件只有十行、**没有任何成员**（没有构造函数、字段、方法、接口）。它存在的唯一理由是给「挂在界面上、但不负责画任何东西的那部分模型」提供一个共同基类，好让 `ScreenBase` 的组件注册与查找能按类型把它找回来。与 `ScreenLayer` 并排看，区别就是可视与不可视。
- [GauntletMovie](./GauntletMovie) — 「一个界面定义文件被真正加载、实例化并绑上数据源之后」的那份运行时对象：把控件树挂到一个自建的根节点上、把视图模型作为绑定根驱动数据刷新，并按构造时传入的开关决定要不要自毁重建。构造函数私有，唯一的获取途径是静态加载方法，而它返回的静态类型是接口而非本类。

## 尚未撰写的部分

下列类型在 1.4.6 源码里存在（命名空间已逐个核对），但**还没有类页**：

| 命名空间 | 待写类型 | mod 什么时候需要 |
| --- | --- | --- |
| `TaleWorlds.ScreenSystem` | `GlobalLayer`、`InputRestrictions`、`CursorType`、`IScreenManagerEngineConnection` | 加常驻全局层；按输入条件屏蔽交互 |
| `TaleWorlds.GauntletUI`（含 `.BaseTypes` / `.Layout` / `.GauntletInput` / `.GamepadNavigation`） | `Widget`、`Container`、`ImageWidget`、`ButtonWidget`、`ListPanel`、`TextWidget`、`GridLayout`、`StackLayout`、`Brush`、`GauntletExtensions`、`UIContext`、`GauntletInputContext`、`IGamepadNavigationContext`、`GauntletGamepadNavigationManager` | 从零搭自定义 Gauntlet 界面；处理输入与手柄焦点导航（同一命名空间另有 82 个控件 / 画刷 / 动画类型） |
| `TaleWorlds.GauntletUI.Data` | （同命名空间另有 14 个类型，如 `IGauntletMovie`、`GauntletView`、`WidgetAttributeValueTypeBinding` 等） | 界面数据的绑定契约与属性绑定扩展 |
| `TaleWorlds.TwoDimension` | `Font`、`EditableText`、`ITexture`、`IDrawObject`、`Text`、`RichText`、`Sprite`、`Texture`、`Material`、`TwoDimensionContext`、`TwoDimensionDrawContext` | 自己做二维绘制：棋盘、图标、图鉴、自绘文字 |

## 与邻桶的分工

- [engine](../engine/) — 渲染实现侧。`ScreenBase` 上挂的 layer 通常是 [GauntletLayer](../engine/GauntletLayer)，资源加载与画刷落地在那边。
- [mission](../mission/) 与 [campaign](../campaign/) — 战斗内弹屏、地图菜单各自的来源方。
- [system](../system/)（尚未撰写） — `TaleWorlds.InputSystem` 的按键与输入上下文在那边，不在 gui 桶。

## 参见

- ↑ [API 首页](../) — 全部 9 个桶的入口表
- ↔ [模块地图](../../architecture/module-map) — ScreenSystem / GauntletUI / TwoDimension 合并成一个桶的规则
- ↑ [中文版本首页](../../)
- ↑ [v1.4.6 版本首页](../../../)
