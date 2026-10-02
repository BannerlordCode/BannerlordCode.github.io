---
title: "system 桶 — 输入系统 TaleWorlds.InputSystem（0 张类页）"
description: "system 桶在 1.4.6 里只对应一个命名空间 TaleWorlds.InputSystem。实测 16 个 .cs 文件、15 个命名空间级类型声明，可以全列。本页给出 15 个类型的完整清单、已核实的文件结构、可复跑的查法，并纠正两处易错点：没有 InputManager 这个类型，GameKeyContextType 是嵌套枚举。"
---
# system：输入系统（`TaleWorlds.InputSystem`）

> **覆盖状态：本桶 0 张类页。**
> 桶名 `system` 容易和别处混淆，所以开头先钉死一件事：**这个桶在 1.4.6 里 = 一个命名空间 = `TaleWorlds.InputSystem` = 源码目录 `TaleWorlds.InputSystem/`**。它既不属于 [engine](../engine)，也不属于 [gui](../gui)。本页是导览，页面上出现的类型名全部是纯文本，**没有任何一个指向尚未撰写的类页**。

## 这个桶在源码里对应什么

归属规则里 `TaleWorlds.InputSystem` 和 `TaleWorlds.System` 都指向 `system`。但第二条规则在 1.4.6 **匹配不到任何东西**：

```bash
grep -rl '^namespace TaleWorlds\.System' bannerlord-1.4.6 --include='*.cs' | wc -l   # → 0
```

所以桶名叫 `system` 只是旧版遗留叫法，实际内容全在 `TaleWorlds.InputSystem/`。

**实测规模**：

| 口径 | 数值 |
| --- | --- |
| `.cs` 文件数（含 `Properties/AssemblyInfo.cs`） | 16 |
| 命名空间级类型声明数 | 15 |
| 声明该命名空间的 `.cs` 文件数 | 15 |
| 子命名空间数 | 0 |

15 个类型就是全部，**不是节选**——这个桶小到可以整桶读完。

## 读源码：可复跑的查法

在工作区根目录执行：

```bash
find bannerlord-1.4.6/TaleWorlds.InputSystem -name '*.cs' | wc -l

# 完整的文件清单（15 个类型文件 + Properties/AssemblyInfo.cs）
find bannerlord-1.4.6/TaleWorlds.InputSystem -name '*.cs' | sort

awk '/^\t(public |internal |abstract |sealed |static |partial |unsafe |readonly |new )*(class|struct|interface|enum|record|delegate)[ \t]+[A-Za-z_]/' \
  $(find bannerlord-1.4.6/TaleWorlds.InputSystem -name '*.cs')

# 核实「没有 InputManager 这个类型」
grep -rnE '(class|struct|interface|enum|record)[[:space:]]+InputManager\b' bannerlord-1.4.6 --include='*.cs'
```

**口径定义**：`.cs 文件数` = `find <目录> -name '*.cs' | wc -l`；`命名空间级类型声明数` = 该目录内缩进恰好一个制表符的类型 / 委托声明行数，**不含嵌套类型**。

## 本桶的 15 个类型（全部核实，未撰写类页）

下面每个名字都用 `grep -rw` 在 `bannerlord-1.4.6/TaleWorlds.InputSystem/` 核实过。**它们全部没有类页**：

- `IInputManager` — 输入管理的接口，游戏注入实现。这是本桶唯一的「入口」。已核实的成员包括 `GetMousePositionX` / `GetMousePositionY` / `GetMouseScrollValue`、`IsMouseActive` / `IsControllerConnected` / `IsAnyTouchActive`、`GetMouseMoveX` / `GetMouseMoveY`、`GetNormalizedMouseMoveX` / `GetNormalizedMouseMoveY`、`GetGyroX` / `GetGyroY` / `GetGyroZ`、`GetMouseSensitivity` / `GetMouseDeltaZ`、`PressKey` / `ClearKeys` / `UpdateKeyData` / `GetVirtualKeyCode` / `SetClipboardText`。
- `Input` — 静态门面，持有当前 `IInputManager` 与 `InputState`，另外还挂了嵌套枚举 `Input.ControllerTypes`。
- `IInputContext` — 某个界面上生效的输入集合的接口。
- `InputContext` — 上面那个接口的实现。
- `EmptyInputManager` — `IInputManager` 的空实现（**是 `internal`**，所以 mod 拿不到）；自己写界面的测试期可以直接用。
- `EmptyInputContext` — `IInputContext` 的空实现。
- `InputKey` — 逻辑键枚举，取值域与平台虚拟键码解耦。
- `Key` — 键的轻量表示（键 + 修饰键组合）。
- `VirtualKeyCode` — 平台虚拟键码枚举；只在做键位映射时才需要直接碰。
- `InputState` — 当前按下 / 松开状态集合。
- `GameKey` — 游戏动作键；官方选项界面绑的就是它。
- `GameKeyContext` — 「这个动作键在哪些界面下生效」。**`GameKeyContextType` 是它内部的嵌套枚举**，不是独立类型，也**没有**同名文件——它在 `GameKeyContext.cs` 里。
- `GameAxisKey` — 轴输入（摇杆、扳机）的动作键，内部嵌套枚举 `GameAxisKey.AxisType`。
- `HotKey` — 玩家可自定义的热键，内部嵌套枚举 `HotKey.Modifiers`。
- `HotKeyManager` — 管理热键的注册表；重绑键位时从这里入手。

## 两处必须记住的纠错

**1. 1.4.6 里没有 `InputManager` 这个类型。** 全树（11385 个 `.cs` 文件）执行

```bash
grep -rnE '(class|struct|interface|enum|record)[[:space:]]+InputManager\b' bannerlord-1.4.6 --include='*.cs'
```

**零命中**。文件清单里只有 `IInputManager.cs` 和 `EmptyInputManager.cs`。

但是——`Input.cs` 里有一个**静态属性**叫 `Input.InputManager`，类型是 `IInputManager`。所以正确的写法是 `Input.InputManager` 这种「静态门面取到接口」的两段式，而不是 `new InputManager()`，也不是 `InputManager.Instance`。旧文档若写成「1.4.6 里没有 `InputManager`」，被读成「取不到输入管理器」同样是错的——**能取到，只是它是个属性而不是类型**。

[modulemanager](../modulemanager) 桶有一个同形的坑：也没有名为 `ModuleManager` 的类型。

**2. `GameKeyContextType` 和 `AxisType` / `Modifiers` 都是嵌套类型。** 它们不是命名空间层级的类型，`using` 和文档归类时别当成三个独立类。同理，prefab 生成物里那些用双下划线拼接出来的类名也不要按拼接结果反查——那种类名是同一套生成机制的产物，按命名空间查桶才准。

## 什么时候会碰到它

**大多数 mod 完全不需要碰这个桶。** 输入处理有三层，你的 mod 大概率只需要最上面一层：

1. **最高层（绝大多数情况够用）**：界面上某个控件被点了 → 你写在 Gauntlet widget 里的回调；或者按键 → 通过官方 `GameKey` 枚举 + 官方按键处理类。这一层你引用的是 [gui](../gui) 和 [viewmodel](../viewmodel) 桶里的东西。
2. **中间层**：你想**重绑**一个动作的键——`HotKeyManager` 与 `GameKey` 就是干这个的。但 1.4.6 已经有官方选项界面数据类（`GameKeyOptionVM` / `GamepadOptionCategoryVM`，落在 [viewmodel](../viewmodel) 桶），通常复用官方结构比改代码省事。
3. **最底层**：`IInputManager` / `IInputContext` 的直接实现与轮询。这层是给游戏本体和测试框架准备的，**mod 不该自己实现 `IInputManager`**——那等于跟游戏的输入管线抢方向盘。手写 input context 只在一种情况下必要：你要接管一个原本没有输入的界面（自己写的 Gauntlet 界面需要读鼠标），这时用 `EmptyInputContext` 打底、自己实现接口，而不是去改全局的 `IInputManager`。

**心智模型**：这一层是「设备 → 语义」的翻译层。`VirtualKeyCode`（平台码）→ `InputKey`（逻辑键）→ `InputState`（当前按下状态）→ `InputContext`（某个界面上生效的那组键）→ `GameKey`（游戏动作）。要判断「玩家此刻按了暂停」，正确路径是从 `GameKey` 往下看，而不是从虚拟键码往上猜。

## 桶间分工

| 你想做的事 | 该去哪个桶 |
| --- | --- |
| 重绑动作键、自写界面的输入上下文 | **本桶** |
| 推屏 / 弹屏 / 界面输入限制 | [gui](../gui) |
| 战斗内的输入意图与单位控制 | [mission](../mission) |
| 官方选项界面数据类 | [viewmodel](../viewmodel) |
| 确认某个内部类型不是 API 面 | [modulemanager](../modulemanager) · [network](../network) |

[gui](../gui) 与 [viewmodel](../viewmodel) 是本桶的两个上游消费者，两页互链。

## 导航

- ↑ [API 参考首页](../) — 已手写覆盖到哪里
- ↑↑ [1.4.6 中文首页](../../) · [版本首页](../../../)
- ↔ [模块地图](../../architecture/module-map) — 桶名 ↔ 命名空间的权威对照
- ↔ [SDK 分层概览](../../architecture/sdk-overview)
- ↔ English: [API](../../../en/api/)
- ↔ 跨版本：[1.4.5 API](../../../../v1.4.5/zh/api/) · [逐类对比](../../../../versions/)