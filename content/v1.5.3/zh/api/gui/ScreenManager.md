---
title: "ScreenManager"
description: "静态界面栈管理器：Push/Pop/Replace 界面、驱动每帧 Update/Tick/LateTick、维护全局图层与焦点，并强制界面切换必须在主线程。"
---

# ScreenManager

**Namespace:** TaleWorlds.ScreenSystem
**Module:** TaleWorlds.ScreenSystem
**Type:** `public static class ScreenManager`
**Base:** 无（静态类）
**Source:** `bannerlord-1.5.3/TaleWorlds.ScreenSystem/ScreenManager.cs`

## 概述

`ScreenManager` 是界面的**栈与输入路由中枢**。它持有一个界面栈，`PushScreen` / `PopScreen` / `ReplaceTopScreen` 改变栈顶，`Update` / `Tick` / `LateTick` 驱动每帧的输入分发、图层排序与命中测试，全局图层（`AddGlobalLayer`）挂在栈外始终存在。它是**静态类**——没有实例，没有生命周期钩子，所有方法都在全局唯一的状态上操作。

## 心智模型

三个集合、一条栈：

- **界面栈 `_screenList`**：栈顶 `TopScreen` 获得输入。`PushScreen` 会先 `TopScreen.HandlePause()` + `HandleDeactivate()`，然后 `screen.HandleInitialize()` + `HandleActivate()` + `HandleResume()`；`PopScreen` 走 `HandlePause` → `HandleDeactivate` → `HandleFinalize` 并从栈移除。
- **图层列表 `SortedLayers`**：所有 `ScreenLayer` 按全局 order 排序，`FocusedLayer` / `FirstHitLayer` 是输入焦点与命中结果。
- **全局图层 `GlobalLayer`**：不属于任何界面，跨界面存在（加载遮罩、覆盖层）。

每帧顺序是 `EarlyUpdate(usableArea)` → `Update(lastKeysPressed)` → `Tick(dt)` → `LateTick(dt)` → `RenderTick`。

**关键约束：`PushScreen` 与 `PopScreen` 都断言必须在主线程**（`TWParallel.IsMainThread()`，否则 `Debug.FailedAssert("Screen should be changed from main thread")`）。这是 mod 最容易踩的崩溃点之一。

**常见误用与坑**

1. **从非主线程切界面**。事件回调、异步任务、AI 线程里调 `PushScreen` → 断言失败甚至崩溃。解法是缓存数据，在主线程的下一次 tick 里切。
2. **`SetAndActivateRootScreen` 在已有栈顶时抛异常**（`throw new Exception("TopScreen is not null.")`）。它只给启动时用。
3. **不 `PopScreen` 就切新界面**。界面栈会越堆越深，旧界面的 `OnFinalize` 不会跑，事件订阅泄漏。
4. **在 `ScreenBase.OnTick` 里改栈**。当前 tick 正在遍历，插入/移除会导致当帧行为不确定。用 `LateTick` 或延迟一帧。
5. **缓存 `TopScreen`**：它是栈顶的快照，栈一变就过期。

## 成员与调用时机

**栈操作**

- `void PushScreen(ScreenBase screen)`：压栈。必须在主线程。
- `void PopScreen()`：弹栈（栈空时安全返回）。
- `void ReplaceTopScreen(ScreenBase screen)`：把栈顶替换成新界面（旧栈顶 finalize）。**弹一个 + 压一个**的原子替代，比先 `PopScreen` 再 `PushScreen` 安全。
- `void SetAndActivateRootScreen(ScreenBase screen)`：设置根界面。栈非空时抛异常。
- `void CleanAndPushScreen(ScreenBase screen)`：清栈后压入。
- `void CleanScreens()`：清空整个栈。
- `ScreenBase TopScreen { get; private set; }`：栈顶界面。
- `bool ScreenTypeExistsAtList(ScreenBase screen)`：栈里是否已有该实例。

**每帧驱动（引擎调用，mod 不调）**

- `void Initialize(IScreenManagerEngineConnection engineInterface)`：绑定引擎接口，游戏启动时调用一次。
- `void EarlyUpdate(Vec2 usableArea)` → `void Update(IReadOnlyList<int> lastKeysPressed)` → `void Tick(float dt)` → `void LateTick(float dt)`。
- `void UpdateLayout()`：重排布局。

**图层与焦点**

- `void AddGlobalLayer(GlobalLayer layer, bool isFocusable)` / `RemoveGlobalLayer(GlobalLayer, bool finalizeLayer)`：全局图层。
- `List<ScreenLayer> SortedLayers`：排序后的全部图层。
- `ScreenLayer FocusedLayer` / `FirstHitLayer`：当前焦点层 / 首个命中层。
- `void TrySetFocus(ScreenLayer)` / `TryLoseFocus(ScreenLayer)`：焦点转移。
- `void SetSuspendLayer(ScreenLayer, bool isSuspended)`：挂起某个图层的处理。
- `List<ScreenLayer> GetPersistentInputRestrictions()`：持续生效的输入限制层。
- `bool IsLayerBlockedAtPosition(ScreenLayer, Vector2)`：该层在指定位置是否被遮挡。
- `void SetScreenDebugInformationEnabled(bool)`：调试信息显示。

**环境与事件**

- `float Scale` / `Vec2 UsableArea` / `void OnScaleChange(float)`：分辨率与缩放。
- `static bool DisableScreenManagerTicks`（字段）：调试用，置 true 会停掉界面 tick。
- `static event OnPushScreenEvent OnPushScreen` / `OnPopScreenEvent OnPopScreen` / `OnControllerDisconnectedEvent OnControllerDisconnected` / `Action FocusGained` / `OnPlatformTextRequestedDelegate PlatformTextRequested`：**全局事件**。想在界面栈变化时做清理（比如弹界面时解绑模型），订阅它们。
- `bool IsControllerActive()` / `IsMouseCursorActive()` / `IsMouseCursorHidden()` / `GetMouseVisibility()`：输入设备状态。
- `bool OnPlatformScreenKeyboardRequested(...)` / `OnOnscreenKeyboardDone(string)` / `OnOnscreenKeyboardCanceled()`：平台软键盘。
- `string ClearSiegeMachineSelection(List<string> args)` / `CopyCustomBattle(...)` / `ApplyCustomBattleLayout(...)` / `SetScreenDebugInformationEnabled(List<string> args)`：调试控制台命令（字符串入参、字符串返回）。

## 真实示例

```csharp
// 打开自己的界面：从主线程调用
public static void OpenSupplyScreen()
{
    ScreenManager.PushScreen(new MySupplyScreen());
}

// 主线程安全的延迟切界面：工作线程只记录意图
private volatile bool _pendingOpen;

public override void OnMissionBehaviorInitialize(Mission mission)
{
    base.OnMissionBehaviorInitialize(mission);
    ThreadPool.QueueUserWorkItem(_ => { _pendingOpen = true; });
    ScreenManager.OnPushScreen += OnPushScreen;
}

public override void OnApplicationTick(float dt)
{
    if (_pendingOpen)
    {
        _pendingOpen = false;
        ScreenManager.PushScreen(new MySupplyScreen());   // 回到主线程
    }
}

private void OnPushScreen(ScreenBase pushedScreen)
{
    Debug.Print("stack top: " + pushedScreen.GetType().Name + " scale=" + ScreenManager.Scale);
}
```

## 风险与边界

- **主线程断言**：`PushScreen` / `PopScreen` 在非主线程会触发 `Debug.FailedAssert`。这是硬约束，不是风格建议。
- **静态状态无隔离**：多任务并存（联机）时界面栈是共享的。不要假设「我的界面还在栈上」。
- **生命周期顺序**：`PushScreen` 的顺序是 `HandleInitialize` → `HandleActivate` → `HandleResume`；`PopScreen` 是 `HandlePause` → `HandleDeactivate` → `HandleFinalize`。你的资源加载放 `OnInitialize`，释放放 `OnFinalize`，中间放激活态逻辑。
- **`OnPopScreen` 触发时机在对象从栈移除之前**（源码里 `OnPopScreenEvent` 先触发，再 `_screenList.Remove`），回调里 `ScreenManager.TopScreen` 还是被弹的那个。
- **跨域方向**：`ScreenManager` 在 ScreenSystem 层。它可以引用 GauntletUI 的 [GauntletLayer](../../engine/GauntletLayer)，但 CampaignSystem/Mission 层**不能**反向引用它——需要弹界面时通过事件通知。

## 依赖关系

- [ScreenBase](../ScreenBase) — 栈元素类型，所有界面继承它
- [GauntletLayer](../../engine/GauntletLayer) — 典型界面图层，负责 UIContext 渲染与输入命中
- [MissionState](../../mission/MissionState) — 任务与界面的栈序协同：任务界面压在地图界面之上