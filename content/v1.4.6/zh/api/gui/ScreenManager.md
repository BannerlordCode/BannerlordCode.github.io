---
title: "ScreenManager"
description: "全局静态界面栈：PushScreen / PopScreen 管理界面顺序，每帧驱动所有 ScreenBase 的 tick、输入分发与焦点。"
---
# ScreenManager

**Namespace:** `TaleWorlds.ScreenSystem`
**Module:** `TaleWorlds.ScreenSystem`
**Type:** `public static class ScreenManager`
**Source:** `TaleWorlds.ScreenSystem/ScreenManager.cs`

## 概述

`ScreenManager` 是一个纯静态类，没有任何实例状态需要 mod 关心。它持有三样东西：一张 `ScreenBase` 栈（`_screenList`）、一张全局 `ScreenLayer` 表、以及与渲染引擎之间的桥（`EngineInterface`）。mod 对它说的最多的一句话是 `ScreenManager.PushScreen(new MyScreen())`；剩下的是 `PopScreen`、`ReplaceTopScreen`、`CleanAndPushScreen` 这几个栈操作，以及在自定义界面里查询焦点、光标、可用区域。

它同时是帧循环的驱动方：`EarlyUpdate` → `Tick` → `LateTick` → `Update` 按固定顺序把 `dt` 与按键派发给栈里的界面。mod 不应也不需要自己调这些方法，它们由引擎主循环在主线程调用。

有几个成员是给控制台命令用的（`ClearSiegeMachineSelection`、`CopyCustomBattle`、`ApplyCustomBattleLayout`、`SetScreenDebugInformationEnabled(List<string>)`），它们的 `List<string>` 参数是控制台解析结果，返回 `string` 是写回控制台的文本。mod 里不要调用它们——实现里用的是 `FirstOrDefault(x => x.GetType().GetMethod("ClearSiegeMachineSelections") != null)` 这种按方法名反射的写法，命中哪个界面取决于当前栈内容。

## 心智模型

栈模型：`PushScreen` 压入并激活，`PopScreen` 弹出栈顶，被覆盖的界面依次经历 pause → resume 或 deactivate → activate。`TopScreen` 永远是栈顶，`SortedLayers` 是当前所有可见 layer 的全局绘制顺序。

典型调用顺序：模块的 `OnGameInitializationFinished` 里注册控制台命令 → 游戏进入某状态时 `ScreenManager.PushScreen(new MyScreen())` → 玩家操作 → `ScreenManager.PopScreen()`。异步回调（Inquiry 回调、任务完成回调）里也可以 `PushScreen`，但要判 `ScreenManager.TopScreen` 是否已经是自己的类型，避免重复入栈。

常见误用有三类。一是**重复 push**：没有去重，`ScreenTypeExistsAtList(screen)` 就是为此存在的守卫。二是**在后台线程 push**：`CleanAndPushScreen` 内部显式检查 `TWParallel.IsMainThread()` 并在非主线程直接返回，但 `PushScreen` 本身没有这层保护。三是**用 `SortedLayers` 做逻辑判断**：它反映的是绘制顺序，会被全局 layer 与屏幕栈共同改变，做「当前哪个界面在最上面」要用 `TopScreen`。

`FocusGained` 事件与 `OnGameWindowFocusChange(bool)` 是不同入口：前者是给订阅者的通知，后者是引擎转发给当前界面的虚方法。

## 关键成员

### 栈操作

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `PushScreen` | `public static void PushScreen(ScreenBase screen)` | 压栈并初始化/激活。传 null 会在后续派发时炸掉，调用前自己判空。返回 void，栈是否真的变化只能靠 `TopScreen` 观察 |
| `PopScreen` | `public static void PopScreen()` | 弹出栈顶并 finalize。栈为空时的行为取决于引擎实现，不要在空栈上调用 |
| `ReplaceTopScreen` | `public static void ReplaceTopScreen(ScreenBase screen)` | 用新界面替换当前栈顶，旧栈顶被 finalize。用于「刷新当前界面」而不新增一层 |
| `CleanAndPushScreen` | `public static void CleanAndPushScreen(ScreenBase screen)` | 清空整栈再压入。内部显式检查 `TWParallel.IsMainThread()`，**非主线程调用会直接返回且什么都不做** |
| `SetAndActivateRootScreen` | `public static void SetAndActivateRootScreen(ScreenBase screen)` | 把栈重置为只含该界面并激活它。引擎切换模式（进战斗、进战役）时使用 |
| `CleanScreens` | `public static void CleanScreens()` | 清空整栈，不压入任何东西。回到主菜单时的收尾动作 |
| `ScreenTypeExistsAtList` | `public static bool ScreenTypeExistsAtList(ScreenBase screen)` | 按 `screen.GetType()` 查栈里是否已有同类界面。返回 true 时应当复用而不是再 push 一个 |

### 状态查询

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `TopScreen` | `public static ScreenBase TopScreen { get; private set; }` | 栈顶界面。栈空时为 null |
| `SortedLayers` | `public static List<ScreenLayer> SortedLayers { get; }` | 全局可见 layer 的绘制顺序表。增删 layer（`AddGlobalLayer` / `RemoveGlobalLayer` / `ScreenBase.AddLayer`）会改变它 |
| `FocusedLayer` | `public static ScreenLayer FocusedLayer { get; private set; }` | 当前持有输入焦点的 layer；没有时为 null。键盘输入只送到它 |
| `FirstHitLayer` | `public static ScreenLayer FirstHitLayer { get; private set; }` | 鼠标命中测试的第一个 layer。判断「鼠标点到了谁」用这个 |
| `UsableArea` | `public static Vec2 UsableArea { get; }` | 当前可用区域尺寸（逻辑像素）。与 `Engine.EarlyUpdate(Vec2)` 传入的值一致，布局计算用 |
| `Scale` | `public static float Scale { get; private set; }` | UI 缩放系数，初值 1.0f。分辨率或显示器变化时由引擎更新 |
| `IsEnterButtonRDown` | `public static bool IsEnterButtonRDown { get; }` | 确认键当前是否按住（右侧扳机/回车）。每帧刷新，不要缓存 |
| `IsLateTickInProgress` | `public static bool IsLateTickInProgress { get; private set; }` | `LateTick` 是否正在执行。在该回调里再触发界面切换会造成重入 |
| `IsControllerActive` | `public static bool IsControllerActive()` | 当前是否有手柄输入。用于在提示里显示「按 A 继续」还是「按回车继续」 |
| `IsMouseCursorHidden` | `public static bool IsMouseCursorHidden()` | 光标是否被隐藏 |
| `IsMouseCursorActive` | `public static bool IsMouseCursorActive()` | 光标当前是否可交互 |
| `GetMouseVisibility` | `public static bool GetMouseVisibility()` | 读取当前光标可见性。与 `IsMouseCursorHidden` 语义相近，优先用后者 |

### 引擎桥接与帧循环

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `EngineInterface` | `public static IScreenManagerEngineConnection EngineInterface { get; }` | 与渲染/平台层的接口，由 `Initialize` 注入。要访问窗口、图层缓冲这类底层能力从这里走 |
| `Initialize` | `public static void Initialize(IScreenManagerEngineConnection engineInterface)` | 保存引擎连接并建立全局 layer 容器。由引擎启动时调用，mod 不重复调 |
| `Tick` | `public static void Tick(float dt)` | 主帧派发：把 `dt` 送给栈内界面 |
| `LateTick` | `public static void LateTick(float dt)` | 帧末派发，进入时会把 `IsLateTickInProgress` 置 true |
| `Update` | `public static void Update(IReadOnlyList<int> lastKeysPressed)` | 按键派发：只送到当前激活的 layer |
| `EarlyUpdate` | `public static void EarlyUpdate(Vec2 usableArea)` | 帧首派发，同时刷新 `UsableArea` |
| `UpdateLayout` | `public static void UpdateLayout()` | 强制所有 layer 重算布局 |
| `OnScaleChange` | `public static void OnScaleChange(float newScale)` | 引擎通知 UI 缩放变了 |
| `OnGameWindowFocusChange` | `public static void OnGameWindowFocusChange(bool focusGained)` | 引擎通知窗口焦点变化，并转给当前界面的同名虚方法 |
| `OnControllerDisconnect` | `public static void OnControllerDisconnect()` | 手柄断开时的清理入口 |
| `OnFinalize` | `public static void OnFinalize()` | 整体收尾，finalize 全部界面 |
| `DisableScreenManagerTicks` | `public static bool DisableScreenManagerTicks` | 调试开关：置 true 后 `Tick` / `LateTick` 不再派发。改它会让所有界面停摆 |

### 全局 layer 与焦点

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `AddGlobalLayer` | `public static void AddGlobalLayer(GlobalLayer layer, bool isFocusable)` | 挂一个跨所有界面存在的 layer（模态提示、调试覆盖层）。`isFocusable` 决定它能否抢键盘焦点 |
| `RemoveGlobalLayer` | `public static void RemoveGlobalLayer(GlobalLayer layer)` | 摘掉全局 layer。摘除后 `SortedLayers` 会重排 |
| `TrySetFocus` | `public static void TrySetFocus(ScreenLayer layer)` | 请求把焦点给某 layer |
| `TryLoseFocus` | `public static void TryLoseFocus(ScreenLayer layer)` | 释放该 layer 的焦点。layer 必须仍在表里 |
| `SetSuspendLayer` | `public static void SetSuspendLayer(ScreenLayer layer, bool isSuspended)` | 暂停或恢复某个 layer 的更新 |
| `IsLayerBlockedAtPosition` | `public static bool IsLayerBlockedAtPosition(ScreenLayer layer, Vector2 position)` | 命中测试：某 layer 上指定位置是否被上层遮挡。注意参数是 `System.Numerics.Vector2`，与 `UsableArea` 的 `Vec2` 不是同一个类型 |
| `GetPersistentInputRestrictions` | `public static List<string> GetPersistentInputRestrictions()` | 取当前生效的输入限制 ID 列表，来自 `InputRestrictions` |
| `OnConstrainStateChanged` | `public static void OnConstrainStateChanged(bool isConstrained)` | 输入被外部约束（对话、Inquiry）时通知栈内界面 |
| `SetScreenDebugInformationEnabled` | `public static void SetScreenDebugInformationEnabled(bool isEnabled)` | 开关屏幕调试信息叠层 |
| `SetScreenDebugInformationEnabled` | `public static string SetScreenDebugInformationEnabled(List<string> args)` | 控制台重载，返回写回控制台的文本 |

### 平台键盘与控制台命令

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `OnPlatformScreenKeyboardRequested` | `public static bool OnPlatformScreenKeyboardRequested(string initialText, string descriptionText, int maxLength, int keyboardTypeEnum)` | 请求系统软键盘。返回值表示是否有订阅者处理了这次请求；没有任何订阅者时返回 false |
| `OnOnscreenKeyboardDone` | `public static void OnOnscreenKeyboardDone(string inputText)` | 软键盘输入完成的回调入口 |
| `OnOnscreenKeyboardCanceled` | `public static void OnOnscreenKeyboardCanceled()` | 软键盘被取消 |
| `ClearSiegeMachineSelection` | `public static string ClearSiegeMachineSelection(List<string> args)` | 控制台命令。按方法名反射在栈里找实现了 `ClearSiegeMachineSelections` 的界面并调用 |
| `CopyCustomBattle` | `public static string CopyCustomBattle(List<string> args)` | 控制台命令。按方法名反射找实现了 `CopyBattleLayoutToClipboard` 的界面 |
| `ApplyCustomBattleLayout` | `public static string ApplyCustomBattleLayout(List<string> args)` | 控制台命令，从剪贴板读回自定义战斗布局 |

### 事件与委托

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `OnPushScreen` | `public static event OnPushScreenEvent OnPushScreen` | 每次 `PushScreen` 后触发，参数是被压入的界面。做「全局界面埋点」的钩子 |
| `OnPopScreen` | `public static event OnPopScreenEvent OnPopScreen` | 每次 `PopScreen` 后触发，参数是被弹出的界面 |
| `OnControllerDisconnected` | `public static event OnControllerDisconnectedEvent OnControllerDisconnected` | 手柄断开事件 |
| `FocusGained` | `public static event Action FocusGained` | 窗口重新获得焦点。参数为空，只表示「回来了」 |
| `PlatformTextRequested` | `public static event OnPlatformTextRequestedDelegate PlatformTextRequested` | 订阅它可以自己接管系统软键盘请求；返回 true 表示已处理，`OnPlatformScreenKeyboardRequested` 随之返回 true |
| `OnPushScreenEvent` | `public delegate void OnPushScreenEvent(ScreenBase pushedScreen)` | `OnPushScreen` 的委托签名 |
| `OnPopScreenEvent` | `public delegate void OnPopScreenEvent(ScreenBase poppedScreen)` | `OnPopScreen` 的委托签名 |
| `OnControllerDisconnectedEvent` | `public delegate void OnControllerDisconnectedEvent()` | 无参委托 |
| `OnPlatformTextRequestedDelegate` | `public delegate bool OnPlatformTextRequestedDelegate(string initialText, string descriptionText, int maxLength, int keyboardTypeEnum)` | 软键盘请求的委托签名，返回 true 表示已处理 |

## 真实示例

```csharp
public class LedgerPrompt
{
    private readonly ScreenBase _returnTo;

    public LedgerPrompt(ScreenBase returnTo)
    {
        _returnTo = returnTo;
    }

    public void Open()
    {
        // InquiryData 的肯定/否定动作是 Action，不是旧的 InquiryCallback 子类
        InformationManager.ShowInquiry(new InquiryData(
            "{=Lp9Qr0St}Ledger",
            "{=Uv1Wx2Yz}Write the entry into the ledger?",
            true, true,
            "{=Ab3Cd4Ef}Write it",
            "{=Gh5Ij6Kl}Forget it",
            OnAffirmative,
            OnNegative));
    }

    // 打开输入界面，并保证不叠层
    public void OpenLedgerScreen()
    {
        if (ScreenManager.TopScreen is MyLedgerScreen)
        {
            return;
        }

        ScreenManager.PushScreen(new MyLedgerScreen());
    }

    private void OnAffirmative()
    {
        // 系统软键盘输入走 PlatformTextRequested
        ScreenManager.OnOnscreenKeyboardDone("accepted");
        ScreenManager.PopScreen();
    }

    private void OnNegative()
    {
        if (_returnTo != null)
        {
            _returnTo.Activate();
        }
    }
}

// 监听全局推屏事件，维护自己的 UI 挂件
private void RegisterScreenHooks()
{
    ScreenManager.OnPushScreen += screen =>
    {
        if (screen is MyLedgerScreen)
        {
            InformationManager.AddSystemNotification("ledger opened");
        }
    };
}
```

替换而不是叠层：

```csharp
ScreenManager.ReplaceTopScreen(new MyLedgerScreen());
```

## 风险与边界

- **纯静态、无实例**：所有状态挂在 `static` 字段上，跨会话共享。切存档 / 回主菜单时状态由引擎清理，mod 自己的静态字段不会自动清。
- **主线程亲和**：`PushScreen` / `PopScreen` 没有线程检查，只有 `CleanAndPushScreen` 显式挡了非主线程。从异步任务回调里切界面几乎必然出问题。
- **无去重**：`PushScreen` 允许同一类型的多个实例同时在栈里。入口处用 `ScreenTypeExistsAtList` 或对 `TopScreen` 做类型判断来防重。
- **`CleanAndPushScreen` 会静默失败**：非主线程调用直接 return，没有日志。异步流程里改用主线程调度。
- **控制台命令靠反射命中**：`ClearSiegeMachineSelection` / `CopyCustomBattle` / `ApplyCustomBattleLayout` 用方法名找界面，目标界面不在栈里就什么也不做。mod 不应依赖它们的返回值。
- **`SortedLayers` 与 `TopScreen` 不是一回事**：`SortedLayers` 是全局绘制顺序，会被 `AddGlobalLayer` 与各界面的 layer 混合重排；判断栈顺序必须用 `TopScreen`。
- **每帧刷新的值不要缓存**：`IsEnterButtonRDown`、`IsMouseCursorActive`、`UsableArea`、`Scale` 在每帧之间会变，缓存起来就会和真实输入脱节。
- **`DisableScreenManagerTicks` 是全局杀伤开关**：一旦被别的代码置 true，所有 `OnFrameTick` 都停摆，界面看起来「卡死」。
- **`Vector2` 与 `Vec2` 混用**：`IsLayerBlockedAtPosition` 用 `System.Numerics.Vector2`，`UsableArea` 用 `TaleWorlds.Core.Vec2`，传错类型编译不过，抄代码时容易踩。
- **重入风险**：`IsLateTickInProgress` 为 true 时再触发 `PushScreen` / `PopScreen` 会让界面在同一帧内被 finalize 又被初始化。战斗结算类界面要特别小心。

## 跨版本提示

1.4.5 的参考源位于 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.ScreenSystem/`。1.4.6 的 `ScreenManager` 相对它新增了 `IScreenManagerEngineConnection` 抽象接口与 `OnConstrainStateChanged(bool)`、`GetPersistentInputRestrictions()`、`SetSuspendLayer(ScreenLayer, bool)` 这几组输入约束相关成员——1.4.5 里这些逻辑直接依赖引擎层，1.4.6 把它抽成了接口。跨版本 mod 若用了输入限制相关能力，需要为 1.4.5 写降级分支。核心的 `PushScreen` / `PopScreen` / `TopScreen` 三个成员跨版本完全一致。

## 依赖关系

- 界面基类：[ScreenBase](../ScreenBase) — 它压栈管理的对象类型。
- 全局 layer 类型：`GlobalLayer` 与 `ScreenLayer` 定义在同一个命名空间。
- 引擎连接：`IScreenManagerEngineConnection` 接口由引擎层实现，存储层实现在 `TaleWorlds.Engine`。
- 渲染层实现：[GauntletLayer](../../engine/GauntletLayer) — 最常见的 layer 实现，通常经 `ScreenBase.AddLayer` 挂上去。
- 输入：`InputRestrictions`、`CursorType` 与本类同命名空间；底层按键来自 `TaleWorlds.InputSystem`。
- 界面里用到战役数据时参见 [Campaign](../../campaign/Campaign)。
- 父级：[gui API 目录导览](../)