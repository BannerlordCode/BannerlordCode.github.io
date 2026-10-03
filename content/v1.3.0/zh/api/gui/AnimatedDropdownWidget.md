---
title: "AnimatedDropdownWidget"
description: "下拉选择控件：本体是 Widget 子类，Button/ListPanel/两个 clip 容器全部由外部（prefab 或代码）注入并在 setter 里自动挂事件；列表本体在首帧 OnUpdate 被重新挂到 EventManager.Root 之下，所以不是本控件的子节点。"
---

# AnimatedDropdownWidget

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class AnimatedDropdownWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/AnimatedDropdownWidget.cs`（611 行）

## 概述

`AnimatedDropdownWidget` 是「点一下展开一列选项」的组合控件。它自身**不创建任何子控件**——构造函数（`AnimatedDropdownWidget.cs:15`）只做两件事：把四个方法包装成委托存进私有字段，以及 `base.UsedNavigationMovements = GamepadNavigationTypes.Horizontal;`（`:21`，意思是手柄方向键在这一层走左右）。真正需要往控件树上挂的东西，全部通过 public 属性从外部注入：

- `TextWidget`（`:28`）——按钮上显示当前选中项文字的控件。注意它的类型是 `Widget`，`UpdateButtonText` 内部才 `as TextWidget` / `as RichTextWidget` 分派（`:312`）。
- `ScrollbarWidget`（`:33`）——下拉列表旁的滚动条。
- `Button`（`:405`）——收起状态下的那个触发按钮。
- `DropdownContainerWidget`（`:430`）——下拉列表的外层容器。
- `DropdownClipWidget`（`:446`）——真正做裁剪与高度动画的那一层。
- `ListPanel`（`:464`）——选项列表本体。

前三个 setter 里藏着这个类最重要的设计：**赋值即接线**。`Button` 的 setter 会先把旧的 `_clickHandler` 从旧按钮的 `ClickEventHandlers` 里摘掉、把新的挂上去，再调 `RefreshSelectedItem()`；`ListPanel` 的 setter 对 `SelectEventHandlers` / `ItemAddEventHandlers` / `ItemRemoveEventHandlers` 做同样的三步。所以你**永远不需要自己订阅这些事件**——设一次属性就够了；而且重复设同一个控件不会重复订阅。

交互层面它做的事：点击按钮 → `OnButtonClick`（`:294`）切换开合 → `OpenPanel`（`:182`）/ `ClosePanel`（`:190`）→ 每帧 `OnLateUpdate`（`:91`）把 `DropdownClipWidget` 的 `ScaledSuggestedHeight` 和 `ScaledPositionYOffset` 用 `MathF.Lerp` 朝目标插值（速度常量 `_animationSpeedModifier = 15f`，`:570`）。高度归零之后才把 `IsVisible` 置 false（`UpdateListPanelPosition`，`:150`），这就是「收起有动画、展开有动画」的全部实现。

## 心智模型

最要紧的一件事：**下拉列表不是这个控件的子节点**。

`OnUpdate`（`:36`）第一件事就是

```csharp
if (!this._initialized)
{
    this.DropdownClipWidget.ParentWidget = this.FindRelativeRoot(this);
    this._initialized = true;
}
```

而 `FindRelativeRoot`（`:81`）沿 `ParentWidget` 一路往上走，直到某层的 `ParentWidget == base.EventManager.Root`，返回那一层。也就是把下拉列表**搬到屏幕根节点下面**，成为兄弟而不是孩子。原因是下拉层必须画在所有兄弟之上——如果留在原来的嵌套位置里，它会被父容器的裁剪矩形（`ClipContents`）切掉。

由此推出三条使用规则：

**第一，注入的控件必须是屏幕上真实存在的节点，且挂载顺序要对。** `FindRelativeRoot` 递归依赖 `ParentWidget` 链，中途遇到 `ParentWidget == null` 会直接空引用崩溃（`FindRelativeRoot` 没有 null 检查，只比较 `== EventManager.Root`）。在 prefab 里这些成员靠 id 绑定，顺序由 prefab 保证；代码构建时必须先把按钮挂进某个容器、再设这些属性。

**第二，`_initialized` 只置位一次，永不复位。** 如果你把整个 `DropdownClipWidget` 换成另一个控件，新的那个不会被重新挂到根下——它会留在旧位置上。`OnDisconnectedFromRoot`（`:74`）只调 `ClosePanelInOneFrame()`，不清 `_initialized`。

**第三，手柄导航是开合时临时建出来的。** `OpenPanel` 调 `CreateNavigationScope()`（`:206`）：新建一个 `GamepadNavigationScope { ScopeMovements = GamepadNavigationTypes.Vertical, DoNotAutomaticallyFindChildren = true, DoNotAutoNavigateAfterSort = true, HasCircularMovement = true, ScopeID = "DropdownScope" }`，把按钮放到 index 0、列表子项放到 index 1..n，并注册一个 `CollectionOrder = 999` 的强制域集合。`ClosePanel` 调 `ClearGamepadNavigationScopeData()`（`:270`）把 index 全部复位成 -1 并移除域。**所以选项必须在打开时就已经挂在 `ListPanel` 里**——打开期间动态加项，index 不会被正确分配。

还有一条「自我保护」逻辑：`OnLateUpdate` 开头（`:93`）判断

```csharp
if (this._previousOpenState && this._isOpen && Vector2.Distance(this.DropdownClipWidget.AreaRect.TopLeft, this._dropdownOpenPosition) > 5f)
{
    this.ClosePanelInOneFrame();
}
```

打开瞬间记下 `_dropdownOpenPosition`（`:142`），之后一旦列表左上角漂移超过 5 像素就强制一帧关闭。用途是**兜住「面板被别的东西挤动了」这种情况**——比如列表变长导致父容器重排。它不是玩家操作触发的，是纯几何检测。

最后理解「谁在改谁」：`CurrentSelectedIndex`（`:516`）是**单一事实来源**。`OnSelectionChanged`（`:342`，玩家点了某一项）在 `UpdateSelectedItem` 为真时把 `ListPanel.IntValue` 抄进 `CurrentSelectedIndex`，然后 `RefreshSelectedItem()` 把 `ListPanelValue` 写回去、把选中项 `SetState("Selected")`、把 `ButtonWidget.IsSelected` 置真、并从选中项子树里**由内向外**遍历 `GetAllChildrenRecursive(null)` 取最后一个 `TextWidget`/`RichTextWidget` 的文字填到按钮上。把 `UpdateSelectedItem`（`:536`）设成 false 可以整套禁掉这条自动同步——默认值是 true（`_updateSelectedItem = true`，`:609`）。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造函数 | `public AnimatedDropdownWidget(UIContext context)`（`:15`） | 建四个 handler 委托并声明本控件在手柄下只消费横向移动。**不创建任何子控件**。 |
| `TextWidget` | `[Editor(false)] public Widget TextWidget { get; set; }`（`:28`） | 按钮上显示当前文字的控件。类型是 `Widget`；`UpdateButtonText` 会 `as TextWidget` 再 `as RichTextWidget` 依次尝试，两个都不是就静默什么都不做。 |
| `ScrollbarWidget` | `public ScrollbarWidget ScrollbarWidget { get; set; }`（`:33`） | 下拉列表旁的滚动条。纯自动属性，控件自己只拿它判断「鼠标是不是在滚动条上按下/松开」（`IsLatestUpOrDown(this.ScrollbarWidget, true)`，含子节点）。 |
| `Button` | `[Editor(false)] public ButtonWidget Button { get; set; }`（`:405`） | 触发按钮。**setter 有副作用**：旧按钮摘掉 `_clickHandler`、新按钮挂上，然后 `RefreshSelectedItem()`。 |
| `DropdownContainerWidget` | `[Editor(false)] public Widget DropdownContainerWidget { get; set; }`（`:430`） | 下拉列表外层容器，纯粹是自动属性。代码里只有两处用：`OnListChanged` 两个重载改它的 `IsVisible`；`UpdateListPanelPosition` 读 `GetChild(0)` 的 `Size.Y + ScaledMarginBottom` 当目标高度。**必须至少有一个孩子**，否则 `GetChild(0)` 越界。 |
| `DropdownClipWidget` | `[Editor(false)] public Widget DropdownClipWidget { get; set; }`（`:446`） | 裁剪层，开合动画作用在它身上。**setter 强制把 `HorizontalAlignment = Left`、`VerticalAlignment = Top`**，所以传进来的控件自身的对齐设置会被覆盖。 |
| `ListPanel` | `[Editor(false)] public ListPanel ListPanel { get; set; }`（`:464`） | 选项列表。**setter 负责三处事件的挂与摘**（`SelectEventHandlers` / `ItemAddEventHandlers` / `ItemRemoveEventHandlers`），并立刻 `RefreshSelectedItem()`。 |
| `ListPanelValue` | `[Editor(false)] public int ListPanelValue { get; set; }`（`:493`） | 直接代理 `ListPanel.IntValue`。getter 在 `ListPanel == null` 时返回 -1；setter 在 `IntValue` 已等于目标值时**不写**（省一次通知）。 |
| `CurrentSelectedIndex` | `[Editor(false)] public int CurrentSelectedIndex { get; set; }`（`:516`） | 当前选中下标，单一事实来源。setter 在值变化时调 `base.OnPropertyChanged(this.CurrentSelectedIndex, "CurrentSelectedIndex")`，走 `PropertyOwnerObject` 的 `int` 重载。 |
| `UpdateSelectedItem` | `[Editor(false)] public bool UpdateSelectedItem { get; set; }`（`:536`） | 自动同步总开关，默认 `true`（`:609`）。置 false 后 `RefreshSelectedItem` 与 `OnSelectionChanged` 都变成空操作，适合由你自己完全接管选中逻辑。 |
| `OnButtonClick` | `public void OnButtonClick(Widget widget)`（`:294`） | 按钮点击回调，**由 `Button` 的 setter 自动挂进 `ClickEventHandlers`**。不是被动画触发的；当本帧的改动来自手柄（`_changedByControllerNavigation`）时它整体跳过开合，只照常发 `OnDropdownClick` 事件。返回值语义：无。 |
| `UpdateButtonText` | `public void UpdateButtonText(string text)`（`:312`） | 把文字写到 `TextWidget`。传 null/空串会写 `" "`（单个空格），这是它防止按钮文字塌成零宽的技巧。两个类型都不匹配时静默无操作。 |
| `OnListChanged` | `public void OnListChanged(Widget widget)`（`:328`） | 「列表子项数量变了」回调（由 `ItemRemoveEventHandlers` 挂上）。判据是 `DropdownContainerWidget.IsVisible = widget.ChildCount > 1`。参数 `widget` 期望是列表容器本身。 |
| `OnListChanged` | `public void OnListChanged(Widget parentWidget, Widget addedWidget)`（`:335`） | 「加了/删了一个子项」回调（由 `ItemAddEventHandlers` 与 `ItemRemoveEventHandlers` 挂上）。判据是 `parentWidget.ChildCount > 0`。注意**两个重载的可见性阈值不同**：`> 1` 对 `> 0`。 |
| `OnSelectionChanged` | `public void OnSelectionChanged(Widget widget)`（`:342`） | 玩家选了某一项。`UpdateSelectedItem` 为真时把 `ListPanel.IntValue` 抄进 `CurrentSelectedIndex` 再刷新。`widget` 参数未被使用。 |
| `OpenPanel` | `protected virtual void OpenPanel()`（`:182`） | 展开：置 `_isOpen`、让 clip 层可见、`CreateNavigationScope()`。**`protected virtual`——派生类可以覆盖它来插入自己的开启动作**。 |
| `ClosePanel` | `protected virtual void ClosePanel()`（`:190`） | 收起：置 `_isOpen = false` 并清手柄导航域。**不立刻隐藏**，由高度插值动画自然收掉。 |
| `OnUpdate` | `protected override void OnUpdate(float dt)`（`:36`） | 首帧重挂父节点；处理「点在别处就收起」；处理「控件不可见就一帧关闭」；末尾调 `RefreshSelectedItem()`。 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)`（`:91`） | 5 像素漂移检测、`UpdateListPanelPosition(dt)`、手柄 L/R 改选中并播 `"checkbox"` 音效、记录开合位置。 |

## 真实示例

把一组选项挂上去、并跟随外部点击关闭——注意必须先 `AddChild` 让控件进入树，再注入属性，因为首帧的 `FindRelativeRoot` 依赖 `ParentWidget` 链：

```csharp
private static AnimatedDropdownWidget BuildFactionDropdown(UIContext context, Widget host)
{
    AnimatedDropdownWidget dropdown = new AnimatedDropdownWidget(context);
    host.AddChild(dropdown);

    ButtonWidget button = new ButtonWidget(context);
    dropdown.AddChild(button);

    ListPanel listPanel = new ListPanel(context);
    dropdown.AddChild(listPanel);

    TextWidget caption = new TextWidget(context);
    dropdown.AddChild(caption);

    dropdown.Button = button;
    dropdown.ListPanel = listPanel;
    dropdown.TextWidget = caption;

    // setter 已经把 OnButtonClick / OnSelectionChanged / 两个 OnListChanged
    // 分别挂进 button.ClickEventHandlers 与 listPanel 的三组事件里。
    dropdown.CurrentSelectedIndex = 0;
    return dropdown;
}
```

**关掉自动同步、自己维护选中态**（`UpdateSelectedItem = false` 时 `RefreshSelectedItem` 与 `OnSelectionChanged` 都是空操作，所以要自己把文字和状态补上）：

```csharp
private static void ApplySelectionManually(AnimatedDropdownWidget dropdown, int index)
{
    dropdown.UpdateSelectedItem = false;
    dropdown.CurrentSelectedIndex = index;
    dropdown.UpdateButtonText("Custom Label");

    Widget item = dropdown.ListPanel.GetChild(index);
    if (item != null && item.CurrentState != "Selected")
    {
        item.SetState("Selected");
    }
}
```

## 风险与边界

- **`DropdownClipWidget` 的父节点由引擎在首帧改写。** 这不是你能控制的：设完属性后第一帧 `OnUpdate` 就会把它 reparent 到 `EventManager.Root` 下。若你手动改了它的 `ParentWidget`，下一帧会被再次搬走。
- **注入的控件不能是 `null`，也没有容错。** `OnUpdate` 立刻读 `this.DropdownClipWidget.ParentWidget`、`OnLateUpdate` 立刻读 `this._button.IsPressed`、`GetChild(0)` 立刻取容器第 0 个孩子。任何一项没注入就是 `NullReferenceException` 或索引越界，不是降级。唯一的例外是 `ListPanel`：`ListPanelValue` 的 getter 在 null 时返回 -1（`:493`），但 `OnSelectionChanged`/`RefreshSelectedItem` 里的 `this.ListPanel.Children.Count` 会炸。
- **`DropdownContainerWidget` 必须有孩子。** `UpdateListPanelPosition`（`:150`）无条件 `GetChild(0)`。
- **两个 `OnListChanged` 重载的阈值不一致**（`> 1` vs `> 0`）。它们分别挂在「整体重建」和「增删单项」两条路径上，实际 prefab 里两个都会触发，最后一次生效的值赢——实践中以哪个为准取决于事件顺序，不要依赖「只有一边会响」。
- **`_checkboxSound` 常量是死的。** 它在 `:552` 声明为 `private const string _checkboxSound = "checkbox"`，但 `OnLateUpdate` 里两处播的都是字面量 `"checkbox"`（`:100`、`:114`）。这个常量不会被编译进任何行为，改它没有任何效果。
- **`OnButtonClick` 的参数 `widget` 从不被读。** 传什么都不影响行为；它的存在只是为了匹配 `Action<Widget>` 的委托签名。
- **`RefreshSelectedItem` 只设不撤。** 它遍历所有子项，对 `j == CurrentSelectedIndex` 的项 `SetState("Selected")`，其余项**不做任何清理**。切换选中项时旧项的 `"Selected"` 状态靠你自己（或容器整体重设）撤销。
- **`RefreshSelectedItem` 取的是子树里最后一个文本控件的 `Text`**：它 `foreach` 遍历 `GetAllChildrenRecursive(null)`，命中就覆盖 `text`，所以最终值来自遍历顺序上最靠后的那个 `TextWidget`/`RichTextWidget`。选项项里放多个文本控件时，标签内容取决于树的顺序。
- **手柄导航域只在打开期间存在，且 `DoNotAutomaticallyFindChildren = true`。** 打开后新增的列表项不会被自动纳入域；下次开合才会重建 index。
- **5 像素漂移检测会让「打开后马上被布局挤动」的列表瞬间消失。** 这是设计意图（防止展开层被父容器裁掉），但如果你在展开期间动态改列表长度，就会表现为「刚打开就关」。
- **控件自己不播开合音效**，只有手柄左右切换时硬编码播 `"checkbox"`；要自定义点击音请自己挂 `ClickEventHandlers`。

## 跨版本提示

对 `bannerlord-1.3.0` / `1.3.15` / `1.4.6` / `1.4.7` / `1.5.3` 五棵源码树做 public/protected 成员签名集合比对：21 条签名**完全一致，增减均为 0**。也就是说 `AnimatedDropdownWidget` 从 1.3 到 1.5 没有加过任何公开成员，也没有删过。

文件字节哈希在 1.3.0 / 1.3.15 / 1.4.6 / 1.4.7 之间各不相同（`f17d1bd0` → `9a015467` → `fb6a12e8`），1.5.3 又是 `b98898e7`，说明**方法体内部有改动**——但改动没有触及公开形状。结论：写 `UpdateButtonText` / `CurrentSelectedIndex` / `Button` 注入这类代码跨版本不用改；依赖「展开时具体播什么音、漂移阈值是多少」这类实现细节的代码，跨版本不保证。

## 依赖关系

- 基类：直接继承 [Widget](../Widget)，通过 `EventManager`、`GamepadNavigationContext`、`ParentWidget`、`AreaRect` 完成挂载与定位
- 必须成对注入的控件：[ButtonWidget](../ButtonWidget)（触发按钮）、[ListPanel](../ListPanel)（选项列表，继承 [Container](../Container)）、[TextWidget](../TextWidget) 或 RichTextWidget（文字载体）、[ScrollbarWidget](../ScrollbarWidget)（滚动条）
- 展开动画依赖的裁剪/高度成员都定义在 [Widget](../Widget) 上：`ScaledSuggestedHeight`、`ScaledPositionYOffset`、`AreaRect`、`IsVisible`
- 手柄导航域类型：[GamepadNavigationScope](../GamepadNavigationScope) 与 [GamepadNavigationForcedScopeCollection](../GamepadNavigationForcedScopeCollection)，方向掩码是 [GamepadNavigationTypes](../GamepadNavigationTypes)
- 若你还关心「点选项自动滚动到可见」的行为，它复用 [ScrollablePanel](../ScrollablePanel) 的 `ScrollToChild`，见 [AnimatedDropdownWidget](.) 自己的私有方法 `GetParentScrollablePanelOfWidget`
- 桶首页：[gui API 分区](../)