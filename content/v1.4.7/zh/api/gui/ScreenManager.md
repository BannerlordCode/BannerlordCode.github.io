---
title: "ScreenManager"
description: "全局 UI 调度器（静态类）：维护屏幕栈与全局图层、驱动每帧 Tick / LateTick / EarlyUpdate 与输入分发，并处理缩放、焦点、手柄断连。它是所有界面操作的唯一入口。"
---
# ScreenManager

**命名空间：** `TaleWorlds.ScreenSystem`
**模块：** `TaleWorlds.ScreenSystem`
**类型：** `public static class ScreenManager`
**基类：** 无（静态类）
**源文件：** `TaleWorlds.ScreenSystem/ScreenManager.cs`（声明见第 14 行）

## 概述

`ScreenManager` 是整个 UI 系统的全局调度器，**全静态、无实例**。它做五件事：维护**屏幕栈**（`PushScreen` / `PopScreen` / `ReplaceTopScreen` / `CleanScreens`）、维护**全局图层**（`AddGlobalLayer` / `RemoveGlobalLayer`，跨屏幕存在的 HUD）、每帧**驱动全部屏幕**（`Tick` / `LateTick` / `EarlyUpdate` / `Update`）、**分发输入**（按键、光标、手柄、软键盘）、以及处理**显示环境变化**（缩放 `Scale`、窗口焦点、手柄断连）。

它是 mod 与 UI 交互的**唯一入口**。要打开一个自定义界面只有一条路：`ScreenManager.PushScreen(new MyScreen())`。要判断「现在在哪个界面」也只有一条路：`ScreenManager.TopScreen`。

它同时暴露三个当前状态：`TopScreen`（栈顶屏幕）、`FocusedLayer`（当前获得焦点的图层）、`FirstHitLayer`（本帧鼠标命中的第一个图层）。写「按 Tab 切换页」「鼠标悬停提示」这类交互时，这三个是核心。

## 心智模型

把 `ScreenManager` 想成**「UI 的操作系统」**：屏幕栈是任务栏，全局层是桌面层，输入是事件源，tick 是心跳。写 UI 逻辑时的正确顺序：

1. **不要自己管栈。** 想显示新界面 → `PushScreen`。想关闭当前界面 → `PopScreen`。想替换当前界面（而不是叠加）→ `ReplaceTopScreen`。**不要在 `OnFinalize` 里手动 pop 栈**，那会和引擎的栈管理打架。
2. **HUD 用全局层。** 跨屏幕都需要显示的东西（顶部提示条、调试信息）用 `AddGlobalLayer`，不要在每个屏幕里各放一份——那会导致多层重叠与输入冲突。
3. **`ReplaceTopScreen` 与 `PushScreen` 语义不同**。前者替换栈顶（不增加深度），后者压栈（可以叠加多层）。全屏互斥界面（菜单之间切换）用前者；需要「在设置里再开一个子界面」用后者。
4. **输入是全局的。** `Update(IReadOnlyList<int> lastKeysPressed)` 把按键分发到当前活动屏幕。`ScreenLayer.EarlyProcessEvents(InputType handledInputs)` 是「我已处理这些输入」的声明——**不声明的话下层会重复响应**。
5. **焦点是独占资源**。`TrySetFocus(layer)` / `TryLoseFocus(layer)` 只应该由最上层界面控制。多个系统抢焦点表现为按键时灵时不灵。

**最常见的三个错误**：在 `OnFrameTick` 里 `PushScreen`（每帧压一层，栈爆掉）；用 `PushScreen` 而不是 `ReplaceTopScreen` 做菜单互斥（返回时多按一次 Back）；以及忘记 `PopScreen` 导致玩家被卡在界面上出不来。

## 何时使用 / 何时不要使用

- **使用**：打开 / 关闭 / 替换界面（`PushScreen` / `PopScreen` / `ReplaceTopScreen` / `CleanScreens`）。
- **使用**：设置根界面（`SetAndActivateRootScreen`）。
- **使用**：添加跨屏幕的全局 HUD 层（`AddGlobalLayer`）。
- **使用**：查询当前界面状态（`TopScreen`、`FocusedLayer`、`IsControllerActive`、`IsMouseCursorHidden`）。
- **使用**：响应当前界面变化（`OnPushScreen` / `OnPopScreen` 事件）。
- **不要**：在 `OnFrameTick` 里压栈。
- **不要**：直接改栈（没有公开的栈操作 API 之外的入口）。
- **不要**：在多个系统里同时抢焦点。

## 成员说明

### 一、屏幕栈

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `static ScreenBase TopScreen { get; private set; }` | 栈顶屏幕。**判断「当前在哪个界面」的唯一入口**。空栈时为 null。 |
| `static void PushScreen(ScreenBase screen)` | **压栈**。新界面盖在旧界面上，旧界面进入暂停态。用于需要叠加的子界面。**不要在每帧回调里调用**。 |
| `static void PopScreen()` | **弹栈**。栈顶界面被销毁（走 `OnFinalize`），下一个界面恢复。栈只剩一个时行为取决于引擎——**长期界面通常应该用 `SetAndActivateRootScreen` 而非压栈**。 |
| `static void ReplaceTopScreen(ScreenBase screen)` | 替换栈顶（不增加深度）。**菜单互斥切换的正确做法**。 |
| `static void CleanAndPushScreen(ScreenBase screen)` | 清空栈并压入新界面。切换到完全不同的模式（战役 ↔ 菜单）时用。 |
| `static void CleanScreens()` | 清空整个屏幕栈。 |
| `static void SetAndActivateRootScreen(ScreenBase screen)` | 设置并激活**根界面**。这是启动时的入口。 |
| `static bool ScreenTypeExistsAtList(ScreenBase screen)` | 栈里是否已经有该类型的屏幕。**避免重复压栈的检查手段**。 |

### 二、全局图层

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `static void AddGlobalLayer(ScreenLayer layer, bool isFocusable)` | 加一层跨屏幕存在的层。**HUD / 调试信息用这个，不要每个屏幕各放一份**。 |
| `static void RemoveGlobalLayer(GlobalLayer layer)` | 移除全局层。 |
| `static void SetSuspendLayer(ScreenLayer layer, bool isSuspended)` | 挂起 / 恢复某一层（暂停它的 tick 与输入）。 |
| `static List<ScreenLayer> GetPersistentInputRestrictions()` | 取当前生效的输入限制列表。 |
| `static void OnConstrainStateChanged(bool isConstrained)` | 引擎侧回调：输入约束状态变化。 |

### 三、每帧驱动

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `static void Tick(float dt)` | 主 tick。驱动所有活动屏幕的 `OnFrameTick`。 |
| `static void LateTick(float dt)` | tick 后期。 |
| `static void EarlyUpdate(Vec2 usableArea)` | 输入分发前的早期更新，参数是可用区域尺寸。 |
| `static void Update(IReadOnlyList<int> lastKeysPressed)` | **输入分发**。把按键传给当前活动屏幕。由引擎调用，mod 不手动调。 |
| `static bool IsLateTickInProgress { get; private set; }` | 是否处在 LateTick 中。某些操作不允许在这个阶段做。 |
| `static bool DisableScreenManagerTicks` | **静态调试开关**。置 true 后 UI 停止 tick——冻结界面用。 |

### 四、输入与焦点

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `static ScreenLayer FocusedLayer { get; private set; }` | 当前获得键盘 / 手柄焦点的层。 |
| `static ScreenLayer FirstHitLayer { get; private set; }` | 本帧鼠标命中的第一个层。 |
| `static void TrySetFocus(ScreenLayer layer)` | 尝试给某层设置焦点。**焦点是独占资源**，只应由最上层界面调用。 |
| `static void TryLoseFocus(ScreenLayer layer)` | 放弃焦点。 |
| `static bool IsLayerBlockedAtPosition(ScreenLayer layer, Vector2 position)` | 某层在指定位置是否被遮挡（被更上层的层挡住）。**自定义层的点击区域判断需要它**。 |
| `static bool IsControllerActive()` | 手柄是否已连接并可用。UI 要切换输入图标的判据。 |
| `static bool IsMouseCursorActive()` / `IsMouseCursorHidden()` | 鼠标光标状态。 |
| `static bool GetMouseVisibility()` | 取鼠标可见性。 |
| `static void OnGameWindowFocusChange(bool focusGained)` | 窗口焦点变化。引擎侧回调。 |
| `static event Action FocusGained` | 窗口获得焦点。 |
| `static event ScreenManager.OnControllerDisconnectedEvent OnControllerDisconnected` | 手柄断连。**UI 应切回键鼠提示**。 |
| `static void OnControllerDisconnect()` | 断连处理。 |
| `static bool OnPlatformScreenKeyboardRequested(string initialText, string descriptionText, int maxLength, int keyboardTypeEnum)` | 请求平台软键盘（主机平台）。返回是否被接管。 |
| `static void OnOnscreenKeyboardDone(string inputText)` | 软键盘输入完成。 |
| `static void OnOnscreenKeyboardCanceled()` | 软键盘取消。 |
| `static event ScreenManager.OnPlatformTextRequestedDelegate PlatformTextRequested` | 平台文本输入请求事件。 |

### 五、屏幕事件与缩放

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `static event ScreenManager.OnPushScreenEvent OnPushScreen` | 界面压栈时触发。参数是被压入的屏幕。**静态事件，跨界面存活——不解除订阅会泄漏**。 |
| `static event ScreenManager.OnPopScreenEvent OnPopScreen` | 界面弹栈时触发。 |
| `static float Scale { get; private set; } = 1f` | UI 缩放系数。**布局计算要用它**，不要硬编码像素。 |
| `static void OnScaleChange(float newScale)` | 缩放变化。引擎侧回调。 |
| `static void UpdateLayout()` | 全局重新布局。分辨率 / 缩放变化后调用。 |
| `static void OnFinalize()` | UI 系统收尾。 |
| `public delegate void OnPushScreenEvent(ScreenBase pushedScreen)` | 事件委托类型。 |
| `public delegate void OnPopScreenEvent(ScreenBase poppedScreen)` | 事件委托类型。 |
| `public delegate void OnControllerDisconnectedEvent()` | 事件委托类型。 |
| `public delegate bool OnPlatformTextRequestedDelegate(string initialText, string descriptionText, int maxLength, int keyboardTypeEnum)` | 事件委托类型。 |

### 六、调试入口

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `static string SetScreenDebugInformationEnabled(List<string> args)` | 控制台命令形式，切换调试信息显示。 |
| `static void SetScreenDebugInformationEnabled(bool isEnabled)` | 直接切换调试信息。**排查层顺序与命中问题用**。 |
| `static string ClearSiegeMachineSelection(List<string> args)` | 控制台命令，清除攻城机械选中。 |
| `static string CopyCustomBattle(List<string> args)` | 控制台命令，复制自定义战斗布局。 |
| `static string ApplyCustomBattleLayout(List<string> args)` | 控制台命令，应用自定义战斗布局。 |

## 示例

### 示例 1：打开、替换与关闭界面

菜单互斥用 `ReplaceTopScreen`，需要叠加的子界面用 `PushScreen`。

```csharp
using TaleWorlds.ScreenSystem;

// 切换到另一个全屏菜单：用 ReplaceTopScreen，不增加深度
public void OpenSettings()
{
    ScreenManager.ReplaceTopScreen(new MySettingsScreen());
}

// 需要在设置里再开一个子界面：用 PushScreen
public void OpenSettingsSubPage()
{
    if (!ScreenManager.ScreenTypeExistsAtList(new MySettingsSubScreen()))
    {
        ScreenManager.PushScreen(new MySettingsSubScreen());
    }
}

// 关闭当前界面
public void Close()
{
    ScreenManager.PopScreen();
}
```

### 示例 2：添加跨屏幕的全局 HUD 层

HUD 用全局层，不要在每个屏幕各放一份。

```csharp
using TaleWorlds.ScreenSystem;

public void InstallHud()
{
    var hudLayer = new GauntletLayer("GlobalHudLayer", 1000, true);
    ScreenManager.AddGlobalLayer(hudLayer, true);   // 可聚焦
}

public void UninstallHud()
{
    ScreenManager.RemoveGlobalLayer(hudLayer);
}
```

### 示例 3：响应当前界面变化，并正确解订阅

静态事件跨界面存活，不解除订阅会一直持有已销毁的屏幕对象。

```csharp
using TaleWorlds.ScreenSystem;

protected override void OnInitialize()
{
    base.OnInitialize();
    ScreenManager.OnPushScreen += OnPush;
}

private void OnPush(ScreenBase pushed)
{
    TopScreenTitle = pushed.GetType().Name;
}

// OnFinalize 是解除静态事件订阅的正确位置
protected override void OnFinalize()
{
    base.OnFinalize();
    ScreenManager.OnPushScreen -= OnPush;
}
```

## 风险与边界

- **`PushScreen` 的滥用**。在 `OnFrameTick` 里压栈会每帧加一层，几秒内栈就爆掉。任何压栈都应由用户输入驱动。
- **栈深与返回**。用 `PushScreen` 做菜单互斥会让玩家多按一次返回键。互斥切换一律用 `ReplaceTopScreen`。
- **静态事件的泄漏**。`OnPushScreen` / `OnPopScreen` / `OnControllerDisconnected` 是 `static`，跨界面存活。在 `OnFinalize` 里不解除，下一界面会向已销毁对象回调。
- **焦点独占**。`TrySetFocus` 被多个系统同时调用时，按键响应会时灵时不灵。只有最上层界面应该动焦点。
- **`DisableScreenManagerTicks` 是全局的**。它一置 true，整个 UI 停止 tick——包括所有界面。调试用，不要留在发布版本。
- **布局与缩放**。`Scale` 不是常量；硬编码像素在高分屏上会错位。布局计算用 `Scale`，变化后调 `UpdateLayout()`。
- **软键盘的平台差异**。`OnPlatformScreenKeyboardRequested` 在主机平台才有意义；PC 上恒为假。依赖它的输入框在 PC 上必须另有回退。
- **单线程 + 原生互操作**：所有成员都在主线程 UI 循环里执行，绘制与输入会穿透到 native。不能从后台线程调用。

## 依赖关系

- 上游 / 提供者：
  - [ScreenBase](../ScreenBase) 是本类压栈 / 弹栈的元素。
  - [ScreenLayer](../ScreenLayer) 是本类分发的图层。
  - [Module](../../core/Module) 的 `SetInitialModuleScreenAsRootScreen` 决定启动时的根界面。
- 相互 / 下游：
  - [GauntletLayer](../../engine/GauntletLayer) 是最常用的层实现，常通过 `AddGlobalLayer` 注册。
  - [ViewModel](../../core-extra/ViewModel) 提供各屏幕的数据绑定。
  - [Game](../../core-extra/Game) 的 `GameStateManager` 与屏幕栈协同完成状态切换。

## 参见

- ↑ 父级：[gui 索引](../)
- ↔ 相关：[ScreenBase](../ScreenBase) · [ScreenLayer](../ScreenLayer) · [GauntletLayer](../../engine/GauntletLayer) · [ViewModel](../../core-extra/ViewModel) · [Game](../../core-extra/Game)