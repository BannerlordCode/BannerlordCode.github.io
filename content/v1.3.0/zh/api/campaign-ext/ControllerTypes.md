---
title: "ControllerTypes"
description: "Input 的嵌套枚举：None / Xbox / PlayStationDualShock / PlayStationDualSense=4。数值 3 被跳过——这是唯一的空洞，但官方按位或 (2|4)=6 判 PS，所以别用 switch 处理它。"
---

# ControllerTypes

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public enum Input.ControllerTypes`（**嵌套在 `Input` 静态类体内**）
**Base:** 无
**File:** `TaleWorlds.InputSystem/Input.cs`（嵌套声明在 `:647-658`；文件共 660 行）

```csharp
namespace TaleWorlds.InputSystem
{
    public static class Input
    {
        // ...
        public enum ControllerTypes
        {
            None,
            Xbox,
            PlayStationDualShock,
            PlayStationDualSense = 4      // ← 显式赋值，3 被跳过
        }
    }
}
```

## 概述

四个值，一个空洞，一个扩展方法。它回答的是「玩家当前接的是什么手柄」。

| 值 | 序号 | 来源 |
| --- | --- | --- |
| `None` | 0 | 键盘/鼠标，或 `EmptyInputManager` 的返回 |
| `Xbox` | 1 | 隐式 |
| `PlayStationDualShock` | 2 | 隐式 |
| `PlayStationDualSense` | **4**（显式） | PS5 手柄 |

**序号 3 不存在。** `PlayStationDualSense = 4` 是显式赋值，所以枚举里跳过了 3。这个空洞不是笔误——看官方怎么用它就清楚了：

```csharp
// Input.cs:10-13
public static bool IsPlaystation(this Input.ControllerTypes controllerType)
{
    return controllerType.HasAnyFlag((Input.ControllerTypes)6);
}
```

**`(Input.ControllerTypes)6` 就是 `2 | 4`** = DualShock ∪ DualSense。这个扩展方法**只关心「是不是 PS 系」，不关心是哪一代**。所以即使枚举有空洞，按位或依然工作。

对应的读法（`Input.cs:223-243`）：

```csharp
public static Input.ControllerTypes ControllerType
{
    get { return Input._controllerType; }
    private set
    {
        if (value != Input._controllerType)
        {
            Input._controllerType = value;
            Action<Input.ControllerTypes> onControllerTypeChanged = Input.OnControllerTypeChanged;
            if (onControllerTypeChanged == null) { return; }
            onControllerTypeChanged(value);
        }
    }
}
```

## 心智模型

**把它当成「一个由输入后端单向推送、消费者可订阅的当前设备标签」。**

数据流：

```
EngineApplicationInterface.IInput.GetControllerType()          ← native，int
        │  (TaleWorlds.Engine/InputSystem/EngineInputManager.cs:243-245 做 (Input.ControllerTypes) 强转)
        ▼
IInputManager.GetControllerType()                              ← 接口，EngineInputManager / EmptyInputManager 各一份实现
        │
        ▼  Input.cs:441  Input.ControllerType = Input.InputManager.GetControllerType();
Input.ControllerType { get; private set; }
        │  值变了才通知
        ▼
Input.OnControllerTypeChanged(value)                           ← public static Action<Input.ControllerTypes>，Input.cs:641
        │
        ├── GauntletUISubModule.OnControllerTypeChanged         （注册于 GauntletUISubModule.cs:40，注销于 :168）
        └── ViewSubModule.OnControllerTypeChanged              （注册于 ViewSubModule.cs:126，注销于 :188）
```

关键要点：

**一、值只有一个写入点。** `Input.cs:441` 那一行赋值是**私有 setter 的唯一调用者**（`grep "ControllerType = "` 全树只命中这一处）。所以 mod 改不了它——`private set` 是真的私有。

**二、`Input.InputManager` 会因为「屏幕键盘」而返回一个替身。**

```csharp
// Input.cs:25-34
public static IInputManager InputManager
{
    get
    {
        if (Input.IsOnScreenKeyboardActive) { return Input._emptyInputManager; }
        return Input._inputManager;
    }
}
```

`EmptyInputManager.GetControllerType()` 返回 `Input.ControllerTypes.None`。**所以屏幕上弹出虚拟键盘的那一刻，`Input.ControllerType` 会被写成 `None`**，离开键盘后又变回去 —— 你会收到两次 `OnControllerTypeChanged`。任何「检测到 PS 就切按钮图标」的逻辑会在弹键盘时短暂抖动。

注意 `EmptyInputManager` 的类声明是 **`internal class EmptyInputManager : IInputManager`**（`TaleWorlds.InputSystem/EmptyInputManager.cs:7`），实例由 `Input.cs:62` 创建并存进 `private static IInputManager _emptyInputManager`（`Input.cs:626`）。**因为它是 internal，mod 不能 `new` 它、不能直接转型它、也拿不到它的具体类型**——你只能看到 `Input.InputManager` 属性在某一时机返回了一个「什么都不响的替身」。要观察这个行为，唯一途径是监听 `Input.OnControllerTypeChanged` 收到 `None`。

**三、消费者有两种写法，语义不同。**

| 写法 | 位置 | 语义 |
| --- | --- | --- |
| `Input.ControllerType.IsPlaystation()` | 5 处 | 「是 PS 系（含两代）」——按位或 `(2\|4)` |
| `== Input.ControllerTypes.PlayStationDualSense \|\| == PlayStationDualShock` | `GauntletUISubModule.cs:125`、`ViewSubModule.cs:150` | 手动把两代列出来 |
| `== Input.ControllerTypes.PlayStationDualShock` | `InputKeyVisualWidget.cs:1527`、`:1575` | 「只认第一代」 |

**只有 `IsPlaystation` 是「一个真扩展方法」**（`Input.cs:10`，`this Input.ControllerTypes` 参数，所以是语法糖 `Input.ControllerType.IsPlaystation()`）。其余都是普通静态调用点。

## 关键成员

| 成员 | 值 / 签名（行号） | 这个成员是做什么用的 |
| --- | --- | --- |
| `None` | 0 | 键盘鼠标，或屏幕键盘激活期间（`EmptyInputManager.GetControllerType()` 恒返回它）。**也是「后端还没初始化」的默认值**——`_controllerType` 是 `static` 字段，默认 `default(ControllerTypes)` 就是 `None`。 |
| `Xbox` | 1 | 隐式序号。1.3.0 托管树里**没有任何一处 `== Input.ControllerTypes.Xbox`**——只有 `IsPlaystation()` 靠「不是 1」间接涵盖它。 |
| `PlayStationDualShock` | 2 | PS4 手柄。`InputKeyVisualWidget.cs:1527` 与 `:1575` 只认它（用来显示 DualShock 的按键布局图）。 |
| `PlayStationDualSense` | **4**（显式） | PS5 手柄。`GauntletUISubModule.OnControllerTypeChanged`（`:125`）和 `ViewSubModule.GetIsPlaystationGamepadActive`（`:150`）把它和 DualShock 并列判断。 |
| （`Input.IsPlaystation`，不是本枚举的成员） | `public static bool IsPlaystation(this Input.ControllerTypes controllerType)`（`Input.cs:10`） | `controllerType.HasAnyFlag((Input.ControllerTypes)6)`。**这是唯一正确的「是不是 PS」判法。** |
| （`Input.OnControllerTypeChanged`，不是本枚举的成员） | `public static Action<Input.ControllerTypes>`（`Input.cs:641`） | 可变心的通知列表。**`+=` / `-=` 是唯一正确的订阅方式**——引擎自己就是这么做的（`Delegate.Combine` / `Delegate.Remove`）。 |
| （`Input.ControllerType`，不是本枚举的成员） | `public static Input.ControllerTypes ControllerType { get; private set; }`（`Input.cs:223`） | 读入口。**setter 私有，全树唯一写入点是 `Input.cs:441`。** |

## 真实示例

**判「是不是 PS」——用扩展方法，别手写：**

```csharp
using TaleWorlds.InputSystem;

private static bool UsePlaystationGlyphs()
{
    return Input.ControllerType.IsPlaystation();   // (2|4) 按位或，两代都覆盖
}
```

**订阅设备切换（形状照抄 ViewSubModule.cs:126 / :188）：**

```csharp
using TaleWorlds.InputSystem;

public class MyGlyphManager
{
    private bool _isPs;

    public void OnModuleLoad()
    {
        Input.OnControllerTypeChanged += this.OnControllerTypeChanged;
        this._isPs = Input.ControllerType.IsPlaystation();   // 先同步一次当前状态
    }

    public void OnModuleUnload()
    {
        Input.OnControllerTypeChanged -= this.OnControllerTypeChanged;   // 必须反注册
    }

    private void OnControllerTypeChanged(Input.ControllerTypes newType)
    {
        // 注意 newType 可以是 ControllerTypes.None —— 屏幕键盘激活时也会触发
        this._isPs = newType.IsPlaystation();
        RebuildKeyHints();
    }

    private void RebuildKeyHints()
    {
        // ...
    }
}
```

**响应布局变化（`InputKeyVisualWidget` 的形状，只认第一代 PS）：**

```csharp
using TaleWorlds.InputSystem;

private static bool ShouldShowDualShockLayout()
{
    // 与 InputKeyVisualWidget.cs:1527 / :1575 同形：
    // 这里是「精确等于」而不是 IsPlaystation()，DualSense 会走别的分支
    return Input.ControllerType == Input.ControllerTypes.PlayStationDualShock;
}
```

在 mod 里处理未识别的设备（不要假设只有这四个值）：

```csharp
using TaleWorlds.InputSystem;

private static string DescribeController()
{
    Input.ControllerTypes t = Input.ControllerType;
    switch (t)
    {
    case Input.ControllerTypes.None:                 return "keyboard/mouse";
    case Input.ControllerTypes.Xbox:                 return "xbox";
    case Input.ControllerTypes.PlayStationDualShock: return "ps4";
    case Input.ControllerTypes.PlayStationDualSense: return "ps5";
    default:                                          // native 可能给出表外的值 —— 走这里
        Debug.Print("unknown controller type: " + (int)t);
        return "unknown";
    }
}
```

## 风险与边界

- **必须写全名 `Input.ControllerTypes`。** 它是**嵌套在 `Input` 静态类里的类型**，不是命名空间级。`using TaleWorlds.InputSystem;` 解决命名空间但不解决嵌套。
- **序号 3 不存在，别用 `count` 循环。** `PlayStationDualSense = 4` 是显式赋值。任何 `for (int i = 0; i <= (int)max; i++) ControllerTypes lookup[i]` 这类代码会访问 `ControllerTypes` 的 3 号槽——那是一个**没有定义名的整数值**，能编译（枚举数组索引器接受 int），但 `ToString()` 得到 `"3"` 而不是任何有意义的字符串。
- **枚举没有 `[Flags]`，但官方按 flags 用。** `IsPlaystation` 里的 `HasAnyFlag((Input.ControllerTypes)6)` 是**把一个位或掩码硬编码成整数字面量**再 cast。所以 `(ControllerTypes)3`（DualShock | 一个不存在的位）会 `HasAnyFlag(6)` 为 true。这套位运算在 `switch` 里**不成立** —— `case Input.ControllerTypes.PlayStationDualShock | Input.ControllerTypes.PlayStationDualSense` 不是常量表达式，编译错误。
- **`None` 会在屏幕键盘激活时被写入。** `Input.InputManager` 的 getter（`Input.cs:25-34`）在 `IsOnScreenKeyboardActive` 时返回 `EmptyInputManager`，其 `GetControllerType()` 恒返回 `None`。所以 `OnControllerTypeChanged` 会收到 `None`。**在回调里无条件 `IsPlaystation()` 会得到 false**，任何基于它的图标切换会在弹键盘时抖一下。
- **`EmptyInputManager` 是 internal，mod 拿不到它。** `EmptyInputManager.cs:7` 是 `internal class EmptyInputManager : IInputManager`，实例由 `Input.cs:62` 创建并存进 `private static IInputManager _emptyInputManager`（`Input.cs:626`）。**它无法被 `new`、无法被转型、也不出现在任何 public 签名里**——「怎么判断当前是不是虚拟键盘接管了输入」这个问题在公开面上无解，只能间接观察 `OnControllerTypeChanged` 收到的 `None`。
- **`OnControllerTypeChanged` 是裸 `Action<T>`，没有弱引用、没有自动清理。** 引擎自己的两个订阅者都在对应 `SubModule` 的注销路径里显式 `Delegate.Remove`（`GauntletUISubModule.cs:168`、`ViewSubModule.cs:188`）。**mod 忘了 `-=` 就会在重复进出游戏后累积多个订阅者**，回调被调多次。
- **通知只在值「变化」时触发。** setter 里 `if (value != Input._controllerType)` 是相等性判断，**相同值不通知**。所以你不能在「订阅时」指望回调被调一次——上面示例里显式做了一次初始同步，就是这个原因。
- **`ControllerType` 的 setter 是私有的，mod 无法写入。** 全树唯一写入点是 `Input.cs:441`。想「假装自己是 PS」只能 Harmony 补丁。
- **值来自 native 的 int 强转。** `EngineInputManager.cs:245` 是 `(Input.ControllerTypes)EngineApplicationInterface.IInput.GetControllerType();`——**托管层不做 `IsDefined` 校验**。native 给出表外的值（未来的手柄、switch 底座）时，你的 `switch` 会静默走 `default`，而 `IsPlaystation()` 可能因为位模式碰巧命中 2 或 4 而给出**错误的 true**。
- **「Xbox」在 1.3.0 托管树里没有任何精确比较点。** 所有 Xbox 分支都是「非 PS」的 else。**这意味着如果将来出现第三种主机手柄，它会自动落进 Xbox 分支**——这不是 bug，但你在读 `if (IsPlaystation()) … else …` 时要知道 else 是「一切非 PS」。
- **`InputKeyVisualWidget` 的 DualShock 精确比较不包括 DualSense。** `:1527` 与 `:1575` 都是 `== PlayStationDualShock`。PS5 手柄在这两处会走另一条分支——**这是「同码不同义」的反例：IsPlaystation() 为 true 而这两个判断为 false**。

## 怎么用

### 怎么拿到它

`ControllerTypes` 是**嵌套在 `Input` 静态类里的枚举**，声明在 `TaleWorlds.InputSystem/Input.cs:647`，完整写法是 `Input.ControllerTypes`。四个成员在 `:650`、`:652`、`:654`、`:656`：

| 成员 | 行号 | 值 |
| --- | --- | --- |
| `None` | `Input.cs:650` | 0 |
| `Xbox` | `Input.cs:652` | 1 |
| `PlayStationDualShock` | `Input.cs:654` | 2 |
| `PlayStationDualSense` | `Input.cs:656` | **4**（显式赋值，所以 3 是空洞） |

获取方式是读静态属性 `Input.ControllerType`（`Input.cs:223`），变化监听是静态委托 `Input.OnControllerTypeChanged`（`Input.cs:641`）。

### 典型用法

要在手柄接入时切换 UI 提示，就订阅那个静态委托：

```csharp
using TaleWorlds.InputSystem;

public static void WatchController()
{
    // OnControllerTypeChanged 是 static Action<Input.ControllerTypes>（Input.cs:641），
    // 重复订阅会多次触发，自己负责退订。
    Input.OnControllerTypeChanged -= OnControllerChanged;
    Input.OnControllerTypeChanged += OnControllerChanged;

    LogCurrentController(Input.ControllerType);
}

private static void OnControllerChanged(Input.ControllerTypes controllerType)
{
    LogCurrentController(controllerType);
}

private static void LogCurrentController(Input.ControllerTypes controllerType)
{
    if (controllerType == Input.ControllerTypes.None)
    {
        return;
    }

    // 用位判断而不是 == ，理由见下面的坑。
    bool isPlaystation = controllerType.HasAnyFlag(Input.ControllerTypes.PlayStationDualShock) ||
                         controllerType.HasAnyFlag(Input.ControllerTypes.PlayStationDualSense);

    System.Console.WriteLine("controller=" + controllerType + " playstation=" + isPlaystation);
}
```

引擎自己的写法可以直接对照 `IsPlaystation` 扩展方法（`Input.cs:10-12`），它判断的是 `HasAnyFlag((Input.ControllerTypes)6)`——**6 = 2 | 4**。

### 最容易踩的坑

**用 `==` 去比。** 引擎把这个枚举当**位标志集合**使用（`Input.cs:12` 那个 `6` 就是两个成员按位或），所以运行时的值可能是**组合值**，而不是任何一个具名成员。后果：`controllerType == Input.ControllerTypes.PlayStationDualShock` 在值为 `6` 时**永远为 false**，而且不会报任何错——你的 PlayStation 分支静默不执行，UI 上什么也不变。用 `HasAnyFlag` 才和引擎语义一致。

第二个坑是值 `3` 没有对应成员。`PlayStationDualSense` 显式写成 `4`（`Input.cs:656`），所以 **3 是空洞**。后果：任何用 `switch` 且没有 `default` 分支的代码，遇到值 `3`（未来新增设备、或组合位恰好等于 3）**会整个穿透，一个分支都不进**，也没有编译器警告。

第三个坑是把枚举值持久化。它没有 `Flags` 特性，但引擎按标志位使用；一旦你把它的数值存进存档或配置文件，**将来引擎新增成员时旧存档里的数字含义就变了**。存字符串更安全。

## 跨版本提示

- **枚举本身的四个成员与序号（`None=0, Xbox=1, PlayStationDualShock=2, PlayStationDualSense=4`）在 1.3.0 / 1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 上逐字相同**，连 `PlayStationDualSense = 4` 这个显式赋值都没变。1.4.5 是残缺树，没有 `TaleWorlds.InputSystem/Input.cs`。
- **唯一的公开面变化：`Input` 在 1.3.15 及之后新增了 `public static Input.ControllerTypes GetPrimaryControllerType()`**（1.3.0 的 `Input.cs` 里没有，1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 全都有）。**这是纯增量**——`ControllerType` 属性、`IsPlaystation` 扩展方法、`OnControllerTypeChanged` 事件的签名一个都没变。
- **对 mod 的实际含义：**
  - 读当前设备：`Input.ControllerType` 在所有版本上都可用，**1.3.0 上不能用 `GetPrimaryControllerType()`**——直接调会编译失败。
  - 想要「有手柄就用手柄，没有就用键盘」这种容错写法，升到 1.3.15+ 后应该用 `GetPrimaryControllerType()`（它显然不是简单转发 `ControllerType`，否则不会新增）。在 1.3.0 上你只能自己写 `Input.ControllerType == ControllerTypes.None ? default : Input.ControllerType`。
  - 枚举值没变 → 任何 `switch` / 数值比较 / `HasAnyFlag` 掩码都跨版本安全。

## 依赖关系

- 宿主类：[Input](../Input)（`TaleWorlds.InputSystem`，静态类，660 行）——本枚举是它的嵌套类型
- 生产者：`IInputManager.GetControllerType()`（`TaleWorlds.InputSystem/IInputManager.cs:19`），两个实现：[EmptyInputManager](../../system/EmptyInputManager)（恒 `None`）与 `EngineInputManager`（`TaleWorlds.Engine/InputSystem/`，转发到 `EngineApplicationInterface.IInput.GetControllerType()`）
- 写入点：`Input.cs:441` `Input.ControllerType = Input.InputManager.GetControllerType();`（私有 setter 的唯一调用者）
- 通知：`Input.OnControllerTypeChanged`（`Input.cs:641`）→ `GauntletUISubModule.OnControllerTypeChanged`（`TaleWorlds.MountAndBlade.GauntletUI/GauntletUISubModule.cs:122`）与 `ViewSubModule.OnControllerTypeChanged`（`TaleWorlds.MountAndBlade.View/`，:154）
- 消费者（5 处 `IsPlaystation` 调用）：`CampaignOptionData.cs:52` / `CampaignUIHelper.cs:152`（`TaleWorlds.CampaignSystem.ViewModelCollection`）、`InputKeyVisualWidget.cs:1595`（[InputKeyVisualWidget](../../gui/InputKeyVisualWidget)）、`OptionsProvider.cs:227`（`TaleWorlds.MountAndBlade/Options/`）
- 屏幕键盘旁路：`Input.IsOnScreenKeyboardActive` + `Input._emptyInputManager`（`Input.cs:25-34`）
- 桶首页：[campaign-ext API 分区](../)
