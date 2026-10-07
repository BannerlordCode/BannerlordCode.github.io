---
title: "ChatLogWidget"
description: "ChatLogWidget 的自动生成类参考。"
---
# ChatLogWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ChatLogWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Chat/ChatLogWidget.cs`

## 概述

`ChatLogWidget` 是聊天窗面板本身：它不显示任何一条消息，而是把输入框、滚动面板、滚动条、历史列表和拖拽边框这些子控件绑在一起，并自己实现“拖右下角改大小”的交互。声明在 `ChatLogWidget.cs:12`，继承 `TaleWorlds.GauntletUI.BaseTypes.Widget`，构造函数 `ChatLogWidget(UIContext context)`（`ChatLogWidget.cs:25`）是空的。

它的行为几乎全部集中在 `OnUpdate(float dt)`（`ChatLogWidget.cs:31`）和 `UpdateResize(float dt)`（`ChatLogWidget.cs:52`）两个方法里。前者每帧处理三件事：把输入焦点交给 `TextInputWidget`、在聊天折叠时把滚动条拉到底部、以及把 `ParentWidget.DoNotPassEventsToChildren` 设为 `!FullyShowChat`（`ChatLogWidget.cs:44`）——也就是说折叠时它会**阻断父控件把事件传给子控件**。

其余公开成员全是 `[DataSourceProperty]`：十三个带通知的属性（`IsChatDisabled`、`FullyShowChat`、`FullyShowChatWithTyping`、`TextInputWidget`、`Scrollbar`、`ScrollablePanel`、`ResizerWidget`、`ResizeFrameWidget`、`SizeX`、`SizeY`、`MessageHistoryList`、`IsMPChatLog`、`FinishedResizing`），加两个多行消息行的注册方法。`SizeX`/`SizeY` 的 setter 不只是记值，还会回写 `base.SuggestedWidth`（`ChatLogWidget.cs:330`）/ `base.SuggestedHeight`，也就是这个控件在驱动自己基类的尺寸。

## 心智模型

把它当成**“每帧跑一次的输入焦点管理者 + 一个手写的手动 resize 状态机”**。消息行本身由 `ChatCollapsableListPanel` 系列负责，它只负责容器行为。

先说每帧那段，因为它是最容易炸的地方。`OnUpdate` 里：

```csharp
if (!this.FullyShowChat)
{
    this.ScrollablePanel.ResetTweenSpeed();                       // ChatLogWidget.cs:41
    this.Scrollbar.ValueFloat = this.Scrollbar.MaxValue;         // ChatLogWidget.cs:42
}
base.ParentWidget.DoNotPassEventsToChildren = !this.FullyShowChat; // ChatLogWidget.cs:44
```

`FullyShowChat` 的初值是 `false`，而这三行**都没有判空**：预制件里没绑 `ScrollablePanel` 或 `Scrollbar` 就直接 `NullReferenceException`；控件被单独 new 而没挂到任何父控件上，`base.ParentWidget` 同样是 null。所以这个类型只能在完整预制件里用，不能当独立控件实例化。

再说 resize 状态机，它有四个互斥状态（`_isResizing` / `_resizeActualPanel` / `_isInitialized` / 空闲）：

- 按下左键且悬停在 `ResizerWidget` 上时，它会把 `ResizeFrameWidget` 设为可见并强制 `Fixed` 尺寸策略，**同时把 `ScrollablePanel.InnerPanel` 原来的尺寸策略存进 `_innerPanelDefaultSizePolicies` 再改成 `Fixed`**——不改内层面板尺寸就不会跟着变，所以这个副作用不是可选的。
- 松开左键时进入“动画”阶段：`_resizeActualPanel = true`、`_lerpRatio = 0`，然后每帧 `Mathf.Clamp(_lerpRatio + dt / 0.14f, 0f, 1f)`。那个 **0.14 秒是写死的**——私有属性 `_resizeTransitionTime` 直接 `return 0.14f`（`ChatLogWidget.cs:20`），没有任何模型可调。
- 动画结束后它把尺寸策略改回 `StretchToParent`、还原内层面板策略，并发出 `base.EventFired("FinishResize", Array.Empty<object>())`（`ChatLogWidget.cs:101`）。`FinishedResizing` 这个 `[DataSourceProperty]` 就是靠绑定这个事件来置位的——**控件自己从不写 `_finishedResizing`**。
- 只有在既没拖动也没动画的那一帧，才执行 `else if (!this._isInitialized)` 分支，把 `SizeX/SizeY` 初始化成 `base.SuggestedWidth/Height`（`ChatLogWidget.cs:107`、`ChatLogWidget.cs:108`）。也就是说如果你在控件上还没跑过一帧 `OnUpdate` 就去读 `SizeX`，拿到的是 `0`。

还有两处容易忽略的细节：

- **`FullyShowChatWithTyping` 的 setter 每次变化都无条件清焦点。** 它先在满足条件时置 `_focusOnNextUpdate = true`，然后不管方向如何都执行 `base.EventManager.FocusedWidget = null;`（`ChatLogWidget.cs:209`）。重新夺回焦点要等下一帧的 `OnUpdate`（`ChatLogWidget.cs:36`）。所以把它设为 `true` 之后同一帧内读焦点，拿到的一定是 null。
- **`RegisterMultiLineElement` / `RemoveMultiLineElement` 维护的列表在本类里没有读者。** 两个方法（`ChatLogWidget.cs:114`、`ChatLogWidget.cs:123`）用 `Contains` 去重后写入 `_registeredMultilineWidgets`（`ChatLogWidget.cs:398`），但 `ChatLogWidget` 自己一次也没读过它。它是给外部（生成的 ViewModel 或相邻控件）用的注册表，不是内部缓存。

## 怎么用

### 怎么拿到它

不要自己 new——虽然构造函数是公开的，但 `OnUpdate` 第一帧就会因为未绑定的 `ScrollablePanel`/`Scrollbar`/`ParentWidget` 而崩。正确做法是在你自己的 `.prefab` 里声明 `ChatLogWidget`，把 `ScrollablePanel`、`Scrollbar`、`TextInputWidget`、`ResizerWidget`、`ResizeFrameWidget`、`MessageHistoryList` 全部绑上，然后通过 `movie.FindViewOf(widget)` 或生成的 `GauntletView` 拿到它。

### 典型用法

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat;

// 完整预制件里的驱动代码。
public class ChatLogDriver
{
    private readonly ChatLogWidget _chat;

    public ChatLogDriver(ChatLogWidget chat)
    {
        _chat = chat;
        // 必须在 prefab 里绑定 ResizerWidget 和 ResizeFrameWidget，
        // 否则 OnUpdate 不会走 UpdateResize（ChatLogWidget.cs:45）。
    }

    public void SetExpanded(bool expanded, bool withInput)
    {
        // FullyShowChatWithTyping 的 setter 每次变化都会把焦点清成 null
        // （ChatLogWidget.cs:209），重新聚焦发生在下一帧 OnUpdate（ChatLogWidget.cs:36）。
        _chat.FullyShowChat = expanded;
        _chat.FullyShowChatWithTyping = expanded && withInput;

        // IsChatDisabled 为 true 时 OnUpdate 不会抢焦点（ChatLogWidget.cs:34）。
        _chat.IsChatDisabled = !withInput;
    }

    public void OnResizeFinished()
    {
        // 控件发的是 "FinishResize" 事件（ChatLogWidget.cs:101）；
        // FinishedResizing 属性只能靠绑定这个事件来更新。
        _chat.FinishedResizing = true;
    }

    public float Width => _chat.SizeX;   // 首次 OnUpdate 之前读到的可能是 0
}
```

### 最容易踩的坑

在预制件里少绑一个子控件，然后在运行时第一帧就拿到空引用。`FullyShowChat` 默认为 `false`，于是 `OnUpdate` 会进入 `if (!this.FullyShowChat)` 分支，无条件调用 `this.ScrollablePanel.ResetTweenSpeed()`（`ChatLogWidget.cs:41`）和 `this.Scrollbar.ValueFloat = this.Scrollbar.MaxValue`（`ChatLogWidget.cs:42`），紧接着还要读 `base.ParentWidget`（`ChatLogWidget.cs:44`）。这三个都没有判空，缺任何一个都是打开界面的瞬间直接 `NullReferenceException`，而不是“聊天框显示为空”。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsChatDisabled` | `public bool IsChatDisabled { get; set; }` |
| `FinishedResizing` | `public bool FinishedResizing { get; set; }` |
| `FullyShowChat` | `public bool FullyShowChat { get; set; }` |
| `FullyShowChatWithTyping` | `public bool FullyShowChatWithTyping { get; set; }` |
| `TextInputWidget` | `public EditableTextWidget TextInputWidget { get; set; }` |
| `Scrollbar` | `public ScrollbarWidget Scrollbar { get; set; }` |
| `ScrollablePanel` | `public ScrollablePanel ScrollablePanel { get; set; }` |
| `ResizerWidget` | `public Widget ResizerWidget { get; set; }` |
| `ResizeFrameWidget` | `public Widget ResizeFrameWidget { get; set; }` |
| `SizeX` | `public float SizeX { get; set; }` |
| `SizeY` | `public float SizeY { get; set; }` |
| `MessageHistoryList` | `public ListPanel MessageHistoryList { get; set; }` |
| `IsMPChatLog` | `public bool IsMPChatLog { get; set; }` |

## 主要方法

### RegisterMultiLineElement
`public void RegisterMultiLineElement(ChatCollapsableListPanel element)`

**用途 / Purpose:** 将multi line element注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 ChatLogWidget 实例
ChatLogWidget chatLogWidget = ...;
chatLogWidget.RegisterMultiLineElement(element);
```

### RemoveMultiLineElement
`public void RemoveMultiLineElement(ChatCollapsableListPanel element)`

**用途 / Purpose:** 从当前容器或状态中移除 multi line element。

```csharp
// 先通过子系统 API 拿到 ChatLogWidget 实例
ChatLogWidget chatLogWidget = ...;
chatLogWidget.RemoveMultiLineElement(element);
```

## 使用示例

```csharp
// 不要自己 new：OnUpdate 第一帧就要求 ScrollablePanel / Scrollbar / ParentWidget 全部非空
// （ChatLogWidget.cs:41、ChatLogWidget.cs:42、ChatLogWidget.cs:44）。
// 在 prefab 里声明控件并绑定子控件，再从 movie 里取。
ChatLogWidget widget = (ChatLogWidget)movie.FindViewOf(someWidgetFromPrefab);
```

## 参见

- [本区域目录](../)
- [ChatCollapsableListPanel](../ChatCollapsableListPanel)
- [ChatLogItemWidget](../ChatLogItemWidget)
- [ChatMultiLineElement](../ChatMultiLineElement)