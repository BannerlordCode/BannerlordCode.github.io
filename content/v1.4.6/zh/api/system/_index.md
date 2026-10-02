---
title: "system 桶 — 输入系统 TaleWorlds.InputSystem（尚未手写）"
description: "system 桶只对应一个命名空间 TaleWorlds.InputSystem，实测 16 个 .cs 文件。本页说明输入层在 1.4.6 里到底是什么形状、mod 什么场景才该碰它，以及一个容易写错的点：1.4.6 没有 InputManager 这个类。"
---
# system：输入系统（TaleWorlds.InputSystem）

> **本桶当前没有任何已撰写页面。** 桶名 `system` 容易和 1.4.5 的遗留命名混淆，所以在开头先钉死一件事：**这个桶 = 一个命名空间 = `TaleWorlds.InputSystem` = 源码目录 `TaleWorlds.InputSystem/`**。它既不属于 [engine](../engine)，也不属于 [gui](../gui)。

## 这个桶对应源码里的什么

`bannerlord-1.4.6/TaleWorlds.InputSystem/` 下**一共 16 个 `.cs` 文件**（实测，含 `Properties/AssemblyInfo.cs`），是全部桶里最小的程序集之一：

```
TaleWorlds.InputSystem/
├── IInputManager.cs        ← 接口，游戏注入实现
├── Input.cs                ← 静态门面，持有当前 IInputManager
├── IInputContext.cs        ← 输入上下文接口
├── InputContext.cs
├── EmptyInputManager.cs    ← 空实现，测试与无输入设备时用
├── EmptyInputContext.cs
├── InputKey.cs             ← 逻辑键的枚举
├── Key.cs
├── VirtualKeyCode.cs       ← 平台虚拟键码枚举
├── InputState.cs           ← 按键按下/松开状态
├── GameKey.cs              ← 游戏动作键（如「暂停」「地图」）
├── GameKeyContext.cs / GameKeyContextType.cs
├── GameAxisKey.cs          ← 轴输入
├── HotKey.cs / HotKeyManager.cs
└── Properties/AssemblyInfo.cs
```

桶名 `system` 本身没什么语义：权威映射里 `TaleWorlds.InputSystem` 只有一条直落规则 `TaleWorlds.InputSystem` → `system`，桶名沿用了旧版遗留的叫法。**1.4.6 里没有叫 `InputSystem` 的顶层目录之外的第二处输入代码**——战斗内的输入意图走 `TaleWorlds.MountAndBlade`（见 [mission-ext](../mission-ext/)），界面控件自己的输入处理走 `TaleWorlds.GauntletUI`（见 [gui](../gui)）。三者互不重叠。

## mod 什么时候会碰到它

诚实的结论：**大多数 mod 完全不需要碰这个桶。**

输入处理有三层，你的 mod 大概率只需要最上面一层：

1. **最高层（99% 的情况够用）**：界面上某个控件被点了 → 你写在 Gauntlet widget 里的回调；或者按键 → 通过官方 `GameKey` 枚举 + 官方的按键处理类。这一层你引用的是 [gui](../gui) 和 [viewmodel](../viewmodel) 桶里的东西。
2. **中间层**：你想**重绑**一个动作的键——`HotKeyManager` 与 `GameKey` 就是干这个的。但要注意 1.4.6 已经有 [viewmodel](../viewmodel) 桶里的 `GameKeyOptionVM` / `GamepadOptionCategoryVM` 这套官方选项界面数据类，通常改 XML 或复用官方结构比改代码省事。
3. **最底层**：`IInputManager` / `IInputContext` 的直接实现与轮询。这层是给游戏本体和测试框架准备的，**mod 不该自己实现 `IInputManager`**——那等于跟游戏的输入管线抢方向盘。手写 input context 只在一种情况下必要：你要接管一个原本没有输入的界面（自己写的 Gauntlet 界面需要读鼠标），这时用 `EmptyInputContext` 打底、自己实现接口，而不是去改全局的 `IInputManager`。

**心智模型**：这一层是「设备 → 语义」的翻译层。`VirtualKeyCode`（平台码）→ `InputKey`（逻辑键）→ `InputState`（当前按下状态）→ `InputContext`（某个界面上生效的那组键）→ `GameKey`（游戏动作）。你要判断「玩家此刻按了暂停」，正确路径是从 `GameKey` 往下看，而不是从虚拟键码往上猜。

## 一个必须记住的纠错

**1.4.6 里没有 `InputManager` 这个类。** 全树搜索 `class InputManager` / `interface InputManager` 零命中，文件清单里只有 `IInputManager.cs` 和 `EmptyInputManager.cs`。

但是——`Input.cs` 里有一个**静态属性**叫 `Input.InputManager`，类型是 `IInputManager`：

```
public static class Input
{
    public static InputState InputState { get; private set; }
    public static IInputContext DebugInput { get; private set; }
    public static IInputManager InputManager { get; ... }
    public static bool IsPlaystation(this Input.ControllerTypes controllerType) { ... }
}
```

所以正确的写法是 `Input.InputManager.IsKeyDown(...)` 这种「静态门面取到接口」的两段式，而不是 `new InputManager()`，也不是 `InputManager.Instance`。旧文档写成「1.4.6 里没有 `InputManager`」如果读成「取不到输入管理器」也是错的——**能取到，只是它是个属性而不是类型**。这一条比「有这个类 / 没这个类」的说法都更接近源码。

顺带：`Input.cs` 里还挂着嵌套的 `Input.ControllerTypes`（以及同层的 `AxisType` / `Modifiers`），它们是嵌套类型不是顶层类型，`using` 和文档归类时别当成两个类。

## 待写清单（节选，14 个文件对应 14 个顶层入口）

下面是这 16 个文件里的实际类型名，**逐个在 `bannerlord-1.4.6/TaleWorlds.InputSystem/` 核实过**。这个桶小到几乎可以全列，但**仍然没有页面可以点**。

- `IInputManager` — 输入管理的接口，游戏注入实现。这是本桶唯一的「入口」；已核实的成员包括 `GetMousePositionX` / `GetMousePositionY` / `GetMouseScrollValue`、`IsMouseActive` / `IsControllerConnected` / `IsAnyTouchActive`、`GetMouseMoveX` / `GetMouseMoveY`、`GetNormalizedMouseMoveX` / `GetNormalizedMouseMoveY`、`GetGyroX` / `GetGyroY` / `GetGyroZ`、`GetMouseSensitivity` / `GetMouseDeltaZ`、`PressKey` / `ClearKeys` / `UpdateKeyData` / `GetVirtualKeyCode` / `SetClipboardText`
- `Input` — 静态门面，持有当前 `IInputManager` 与 `InputState`；上面已列出它实际暴露的成员
- `IInputContext` — 某个界面上生效的输入集合的接口
- `InputContext` — 上面那个接口的实现
- `EmptyInputManager` — `IInputManager` 的空实现；自写界面的测试期可以直接用
- `EmptyInputContext` — `IInputContext` 的空实现
- `InputKey` — 逻辑键枚举，取值域与平台虚拟键码解耦
- `Key` — 键的轻量表示（键 + 修饰键组合）
- `VirtualKeyCode` — 平台虚拟键码枚举；只在做键位映射时才需要直接碰
- `InputState` — 当前按下 / 松开状态集合
- `GameKey` — 游戏动作键；`OptionsVM` 那套键位选项界面绑的就是它
- `GameKeyContext` / `GameKeyContextType` — 「这个动作键在哪些界面下生效」
- `GameAxisKey` — 轴输入（摇杆、扳机）的动作键
- `HotKey` / `HotKeyManager` — 玩家可自定义的热键，以及管理它们的注册表；重绑键位时从这里入手

**没有页面**。写的时候注意：`IInputManager` 的成员是真接口方法，页面要写清「谁注入实现、什么时候可用」，而不是把方法列表摊开。

## 为什么现在还没有页面

1.4.6 的手写覆盖按 **mod 实际使用频率** 排序。这个桶排最后，理由很直接：**它是三层输入里最底层的一层，而绝大多数 mod 在上面两层就结束了。** 已经写好的 [gui](../gui)（推屏/弹屏/输入限制）、[mission](../mission)（战斗内单位与行为）两桶覆盖了「mod 真的需要干预输入」的全部常见场景。给一个 16 文件的底层翻译层逐类写页，产出会是签名罗列，而不是「怎么用」的心智模型。

所以本桶排在手写队列后段。**这一页不是占位符**——归属、文件清单、纠错、待写清单都是核实过的。

## 导航

- ↑ [API 参考首页](../) — 已手写覆盖到哪里
- ↑↑ [1.4.6 中文首页](../../) · [版本首页](../../../)
- ↔ [模块地图](../../architecture/module-map) · [SDK 分层概览](../../architecture/sdk-overview)
- ↔ English: [API](../../../en/api/)
- ↔ 跨版本：[1.4.5 API](../../../../v1.4.5/zh/api/) · [逐类对比](../../../../versions/)
