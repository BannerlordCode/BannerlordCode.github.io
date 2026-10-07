---
title: "IAdminPanelOptionInternal"
description: "管理面板选项的内部侧：6 个成员里有 3 个是回调订阅（Add/RemoveValueChangedCallback），而 Add 侧无去重、Remove 侧找不到就静默——配对调用不是强制的。"
---

# IAdminPanelOptionInternal

**Namespace:** `TaleWorlds.MountAndBlade.Multiplayer.Admin`
**Module:** Modules.Multiplayer / Modules.CustomBattle
**Type:** `internal interface IAdminPanelOptionInternal`（另有泛型变体 `IAdminPanelOptionInternal<T>`）
**Base:** 无
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.Admin/IAdminPanelOptionInternal.cs`

## 概述

`IAdminPanelOptionInternal` 是 21 行、**6 个成员**的内部接口（`:5-18`），外加一个**空泛型变体** `IAdminPanelOptionInternal<T>`（`:19-21`）。六个成员分三组：

- **取值（2 个）**：`GetOptionType()`（`:7`）、`GetOptionAccessMode()`（`:9`）
- **变更（2 个）**：`OnApplyChanges()`（`:11`）、`OnFinalize()`（`:17`）
- **回调订阅（2 个）**：`AddValueChangedCallback(Action)`（`:13`）、`RemoveValueChangedCallback(Action)`（`:15`）

**泛型变体的 body 是空的**（`:20` 只有一对 `{}`）—— 它只是把三个接口合在一起供泛型代码约束用，**不新增任何成员**。

它**不继承任何东西**，接入方式全部是 `is` 判定，共 3 处消费点：`AdminPanelOptionGroup.cs:67`、`DefaultAdminPanelOptionProvider.cs:618` 与 `:649`。

## 心智模型

把它当成**「选项的私有控制面」**。三条推论：

第一,**六个成员里有三个是纯查询，而消费者把它们混用。** `:618` 那处 `is` 判定之后立刻调 `GetOptionType()`（`:622`），`:649` 那处判定之后调 `OnApplyChanges()`（`:651`）。**⇒ 同一个 `is` 判定被用来拿「只读信息」和「触发副作用」两种东西。**

第二,**回调的 Add / Remove 不是强制配对的。** `:13` 与 `:15` 是两个独立方法，实现方可以只 Add 不 Remove。**⇒ 订阅者泄漏或重复订阅都不会在接口层被发现。** 我**未核查** `AdminPanelOption<T>` 的实现体是否做了去重，**不断言**。

第三,**泛型变体 `:19-21` 是空的，但它继承的三个接口里有两个我们没在本桶见到。** `:19` 写的是 `internal interface IAdminPanelOptionInternal<T> : IAdminPanelOptionInternal, IAdminPanelOption<T>, IAdminPanelOption`。**⇒ 真正提供「泛型版选项」的成员在 `IAdminPanelOption<T>` 上，而不在本文件。**

边界：**`internal` 接口 + 泛型变体**，编译期不可实现也不可引用。

## 如何使用

**怎么拿到它**：**编译期不可用**。只能让引擎自带的 `AdminPanelOption<T>` 实现它（`AdminPanelOption.cs:8`），或用反射。

复现「同一个 `is` 判定既取只读信息又触发副作用」这个形态（这是本页最值得注意的一点）：

```csharp
using TaleWorlds.Localization;

// IAdminPanelOptionInternal.cs 全文 21 行，6 个成员 + 1 个空泛型变体
//   :7   OptionType GetOptionType();
//   :9   MultiplayerOptionsAccessMode GetOptionAccessMode();
//   :11  void OnApplyChanges();
//   :13  void AddValueChangedCallback(Action callback);
//   :15  void RemoveValueChangedCallback(Action callback);
//   :17  void OnFinalize();
//   :19  internal interface IAdminPanelOptionInternal<T> : IAdminPanelOptionInternal, IAdminPanelOption<T>, IAdminPanelOption
//   :20  { }        ← 空 body，不新增成员
//
// 三处消费点（两个程序集各一份，内容逐字节相同）：
//   AdminPanelOptionGroup.cs:67          is 判定 -> 调 OnFinalize()
//   DefaultAdminPanelOptionProvider.cs:618  if (!(item is …)) continue;  -> 判定成功才 GetOptionType()
//   DefaultAdminPanelOptionProvider.cs:649  is 判定 -> 调 OnApplyChanges()
TextObject note = new TextObject("{=my_opt}one is-check, two different effects");
Debug.Print(note.ToString(), 0);
```

**用它最容易踩的一条**：**`:618` 与 `:649` 的判定方向相反，而后果完全不同。** `:618` 是 `if (!(item is IAdminPanelOptionInternal …)) { continue; }` —— **不实现本接口的选项被整个跳过，不会有任何提示**；而 `:649` 是 `if (item2 is …) { … OnApplyChanges(); }` —— 不实现就什么都不做。**⇒ 自定义选项若漏实现本接口，现象是「这个选项在设置界面里不出现」，而不是「它不工作」。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `GetOptionType` | `OptionType GetOptionType();` | `:7`。**查询「这是哪一类选项」。** 唯一被 `DefaultAdminPanelOptionProvider.cs:622` 调用，就在 `:618` 的 `is` 判定之后。 |
| `GetOptionAccessMode` | `MultiplayerOptionsAccessMode GetOptionAccessMode();` | `:9`。查询访问模式（谁能改）。**消费点：未核查** —— 我确认了接口声明，但**没有在 `DefaultAdminPanelOptionProvider.cs` / `AdminPanelOptionGroup.cs` 里找到它的调用**，故不断言它是否被调用。 |
| `OnApplyChanges` | `void OnApplyChanges();` | `:11`。**把待应用的改动落到设置上。** 唯一调用点 `DefaultAdminPanelOptionProvider.cs:651`，在 `:649` 的 `is` 判定之后。**⇒ 这是本接口里唯一有可观察副作用的成员之一**（另一个是 `OnFinalize`）。 |
| `AddValueChangedCallback` | `void AddValueChangedCallback(Action callback);` | `:13`。订阅「值变了」的回调。**接口层不保证去重、不保证非 null**。 |
| `RemoveValueChangedCallback` | `void RemoveValueChangedCallback(Action callback);` | `:15`。退订。**与 `Add` 不是强制配对** —— 见「心智模型」第二点。 |
| `OnFinalize` | `void OnFinalize();` | `:17`。清理。**唯一调用点 `AdminPanelOptionGroup.cs:67` 之后**（在 `:63` 的 `IAdminPanelOptionGroup.OnFinalize()` 显式实现里遍历 `_options` 时）。**它与 [IAdminPanelActionInternal.OnFinalize](../IAdminPanelActionInternal/) 同名但是不同类型的方法；两者是否在同一时机被调：未核查。** |
| `IAdminPanelOptionInternal<T>` | `internal interface IAdminPanelOptionInternal<T> : IAdminPanelOptionInternal, IAdminPanelOption<T>, IAdminPanelOption` | `:19-21`。**空 body**（`:20`）。**它的唯一作用是给泛型代码一个同时约束三个接口的类型**；**它不新增任何成员**。实现者是 `AdminPanelOption<T>`（`AdminPanelOption.cs:8` 同时实现四个接口）。 |

## 真实示例

三处消费点的效果对照（这是本页的核心）：

```csharp
// ① AdminPanelOptionGroup.cs:63  void IAdminPanelOptionGroup.OnFinalize()
//    :66  for (i … _options.Count)
//    :67      if (_options[i] is IAdminPanelOptionInternal opt)
//    :69          opt.OnFinalize();
//    => 收尾阶段，逐个选项调 OnFinalize
//
// ② DefaultAdminPanelOptionProvider.cs:616  foreach (IAdminPanelOption item in enumerable)
//    :618  if (!(item is IAdminPanelOptionInternal opt)) { continue; }
//    :622  OptionType optionType = opt.GetOptionType();
//    => 【反向判定】：不实现本接口的选项被 continue 跳过 ⇒ 现象是「选项不出现」
//
// ③ DefaultAdminPanelOptionProvider.cs:647  foreach (IAdminPanelOption item2 in enumerable)
//    :649  if (item2 is IAdminPanelOptionInternal opt2)
//    :651      opt2.OnApplyChanges();
//    => 正向判定，不实现就什么都不做
Debug.Print("1 处正向 + 1 处反向 + 1 处正向；反向那处的后果是「选项消失」", 0);
```

泛型变体的空 body 与真实成员归属：

```csharp
// :19  internal interface IAdminPanelOptionInternal<T> : IAdminPanelOptionInternal, IAdminPanelOption<T>, IAdminPanelOption
// :20  { }
// ⇒ 泛型版不新增成员；真正的泛型成员在 IAdminPanelOption<T> 上（本文件里看不到）
// 实现者 AdminPanelOption.cs:8:
//   internal class AdminPanelOption<T> : IAdminPanelOptionInternal<T>, IAdminPanelOptionInternal,
//                                     IAdminPanelOption<T>, IAdminPanelOption
//   ^ 四个接口全部显式列出
Debug.Print("泛型变体空 body；实现类同时实现四个接口", 0);
```

## 风险与边界

- **`internal` 接口 + 泛型变体，编译期不可实现也不可引用。** `:5` 与 `:19`。
- **不继承任何东西。** 接入全靠 `is` 判定（三处）。**⇒ 与公开的 `IAdminPanelOption` 之间没有继承关系**，两者是并列的。
- **`:618` 的反向判定会让「漏实现」的选项消失。** 见「最容易踩的一条」。**没有 `FailedAssert`、没有日志。**
- **`GetOptionAccessMode`（`:9`）的消费点：未核查。** 我在两个消费文件里没找到它的调用，**不断言它是死成员** —— 也可能经 `AdminPanelOption<T>` 内部间接使用。
- **回调 Add/Remove 不保证配对或去重。** `:13`/`:15`。**实现体是否去重：未核查。**
- **`IAdminPanelOptionInternal<T>` 的空 body。** `:20`。**⇒ 它是纯约束容器，不是行为接口。**
- **`OnFinalize` 与 `IAdminPanelActionInternal.OnFinalize` 同名不同类型。** **是否同一时机调用：未核查。**
- **在两个程序集里各有一份逐字节相同的定义。** 我 `diff` 过 `IAdminPanelOptionInternal.cs`（各 21 行）**内容完全相同**。**⇒ 全树 8 处命中 = 4 个语义用法 × 2 个程序集。**

## 参见

- 兄弟接口：[IAdminPanelActionInternal](../IAdminPanelActionInternal/)（继承 `IAdminPanelAction`，1 成员）、[IAdminPanelTickable](../IAdminPanelTickable/)（不继承，1 成员）
- 实现者：`Modules.Multiplayer/…/Admin/AdminPanelOption.cs:8` 与 `Modules.CustomBattle/…/AdminPanelOption.cs:8`（逐字节相同）
- 三个消费点：`AdminPanelOptionGroup.cs:67`、`:74`；`DefaultAdminPanelOptionProvider.cs:618`、`:649`、`:545`（两个程序集各一份）
- 两个程序集的位置：`Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.Admin/` 与 `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.Admin/`
- 桶首页：[mission API 分区](../)