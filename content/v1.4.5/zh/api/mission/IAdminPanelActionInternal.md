---
title: "IAdminPanelActionInternal"
description: "管理面板动作的内部侧：继承公开的 IAdminPanelAction 只加一个 OnFinalize()，而唯一用途是让选项组在关闭时统一清理——公开接口上没有这个方法。"
---

# IAdminPanelActionInternal

**Namespace:** `TaleWorlds.MountAndBlade.Multiplayer.Admin`
**Module:** Modules.Multiplayer / Modules.CustomBattle
**Type:** `internal interface IAdminPanelActionInternal : IAdminPanelAction`
**Base:** `IAdminPanelAction`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.Admin/IAdminPanelActionInternal.cs`

## 概述

`IAdminPanelActionInternal` 是 6 行、**1 个成员**的内部接口：`:3` 的 `internal interface IAdminPanelActionInternal : IAdminPanelAction` 与 `:5` 的 `void OnFinalize();`。

**它存在的全部理由就是那一个 `OnFinalize()`。** 公开的 `IAdminPanelAction` 上没有它 —— 所以凡是需要在面板关闭时被清理的动作，实现方必须**额外**声明实现本接口，而消费方必须 `is` 判定后才能调到它。

唯一实现者是 `AdminPanelAction`（`AdminPanelAction.cs:6`：`internal class AdminPanelAction : IAdminPanelActionInternal, IAdminPanelAction`）。唯一消费点是 `AdminPanelOptionGroup.cs:74`（`if (_actions[j] is IAdminPanelActionInternal adminPanelActionInternal)`）。

## 心智模型

把它当成**「公开契约之外的收尾钩子」**。三条推论：

第一,**它与公开接口是「继承 + 追加」而非替代。** `:3` 继承了 `IAdminPanelAction`，所以实现者**两个都要实现**（`AdminPanelAction.cs:6` 的基类列表里两个都在）。**⇒ 本接口不提供任何公开接口已有的能力，只加一个生命周期末尾的方法。**

第二,**它的唯一调用点是一次 `is` 降级转换。** `AdminPanelOptionGroup.cs:74` 从 `List<IAdminPanelAction>`（公开类型）里取出元素，判定它是否 `is IAdminPanelActionInternal`，是则才能调 `OnFinalize()`。**⇒ 不实现本接口的动作，在收尾时会被静默跳过。**

第三,**与 [IAdminPanelTickable](../IAdminPanelTickable/) 的对比说明了为什么要有「Internal」这一层。** `IAdminPanelTickable` 不继承任何东西、接入方式也是 `is` 判定；本接口**继承了公开接口**，所以 `is` 判定能同时验证「它是不是一个 action」+「它有没有收尾钩子」。**⇒ 继承在这里的作用是让降级转换的类型检查更严格，而不是为了复用成员。**

## 如何使用

**怎么拿到它**：**编译期不可实现也不可引用**（`internal`）。唯一路径是继承引擎的 `AdminPanelAction`，或用反射。

复现「公开接口上没有 `OnFinalize`，必须走 `is` 判定」这条（这是本页唯一的内容）：

```csharp
using TaleWorlds.Localization;

// IAdminPanelActionInternal.cs（6 行全文）
//   :3  internal interface IAdminPanelActionInternal : IAdminPanelAction
//   :5  void OnFinalize();
// 实现者：AdminPanelAction.cs:6
//   internal class AdminPanelAction : IAdminPanelActionInternal, IAdminPanelAction
//            ^ 两个都实现 —— 继承公开接口 + 追加 OnFinalize
// 唯一消费点：AdminPanelOptionGroup.cs:74
//   if (((List<IAdminPanelAction>)(object)_actions)[j] is IAdminPanelActionInternal adminPanelActionInternal)
// ⇒ 元素静态类型是公开接口，只有 is 判定成立才能调 OnFinalize()
TextObject note = new TextObject("{=my_admin}OnFinalize lives only on the internal interface");
note.SetTextVariable("X", 1);
Debug.Print(note.ToString(), 0);
```

**用它最容易踩的一条**：**实现类只写 `IAdminPanelAction` 而漏掉 `IAdminPanelActionInternal`，收尾钩子就静默不执行。** `AdminPanelOptionGroup.cs:74` 的 `is` 判定失败时走的是「跳过」分支，**没有 `FailedAssert`、没有日志**。**⇒ 自定义管理面板动作时，若需要清理逻辑，漏实现本接口的现象是「关闭面板后资源没释放」，而代码里看不出原因。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `OnFinalize` | `void OnFinalize();` | **本接口的全部（`:5`）。** 由 `AdminPanelOptionGroup.cs:74` 的 `is` 判定后调用。**与 [IAdminPanelOptionInternal](../IAdminPanelOptionInternal/) 的 `OnFinalize`（`:17`）同名，但两个是不同类型上的不同方法** —— 它们的清理时机与调用方我**未核查是否一致**，不断言。 |

## 真实示例

两个兄弟接口的形态对照（本接口的独特点是「继承」）：

```csharp
// IAdminPanelActionInternal.cs:3   internal interface IAdminPanelActionInternal : IAdminPanelAction   ← 继承
// IAdminPanelOptionInternal.cs:5   internal interface IAdminPanelOptionInternal                        ← 不继承
// IAdminPanelTickable.cs:3         internal interface IAdminPanelTickable                              ← 不继承
//
// 接入方式三者一致：都是 is 判定
//   AdminPanelOptionGroup.cs:74   … is IAdminPanelActionInternal …
//   AdminPanelOptionGroup.cs:67   … is IAdminPanelOptionInternal  …
//   AdminPanelOptionGroup.cs:44   … is IAdminPanelTickable        …
//   DefaultAdminPanelOptionProvider.cs:545  … is IAdminPanelTickable …
//   DefaultAdminPanelOptionProvider.cs:618/649 … is IAdminPanelOptionInternal …
Debug.Print("三者都是 is 判定；本接口是唯一继承公开接口的", 0);
```

两个程序集各一份的实测证据：

```csharp
// diff 逐字节比较（各 6 行）：内容完全相同
//   Modules.Multiplayer/…/Admin/IAdminPanelActionInternal.cs
//   Modules.CustomBattle/…/Admin/IAdminPanelActionInternal.cs
// 全树命中（排除自身文件）= 4 处 = 2 个语义用法 x 2 个程序集：
//   AdminPanelAction.cs:6        实现
//   AdminPanelOptionGroup.cs:74  消费
Debug.Print("4 处命中 = 2 个程序集 x 同一份逻辑", 0);
```

## 风险与边界

- **`internal interface`，编译期不可实现也不可引用。** `:3`。**mod 只能靠反射，或继承引擎的 `AdminPanelAction`。**
- **`is` 判定失败时静默跳过。** `AdminPanelOptionGroup.cs:74`。**没有 `FailedAssert`、没有日志。** 见「最容易踩的一条」。
- **必须同时实现两个接口。** `:3` 继承了 `IAdminPanelAction`，`AdminPanelAction.cs:6` 的基类列表里两个都在。**只实现公开的那个，收尾钩子不生效。**
- **在两个程序集里各有一份逐字节相同的定义。** 与 [IAdminPanelTickable](../IAdminPanelTickable/) 同构。
- **`OnFinalize` 与 `IAdminPanelOptionInternal.OnFinalize` 同名但不同类型。** 后者在 `IAdminPanelOptionInternal.cs:17`。**两者是否在同一个时机被调用：未核查。**
- **`OnFinalize` 的实现体：未核查。** 我确认了接口声明与唯一调用点，**但没有读 `AdminPanelAction` 对它的实现体**，故不描述它清理了什么。

## 参见

- 兄弟接口：[IAdminPanelOptionInternal](../IAdminPanelOptionInternal/)（21 行 6 成员 + 泛型变体，不继承）、[IAdminPanelTickable](../IAdminPanelTickable/)（6 行 1 成员，不继承）
- 唯一实现者：`Modules.Multiplayer/…/Admin/AdminPanelAction.cs:6` 与 `Modules.CustomBattle/…/AdminPanelAction.cs:6`（逐字节相同）
- 唯一消费点：`Modules.Multiplayer/…/Admin/AdminPanelOptionGroup.cs:74` 与 `Modules.CustomBattle/…` 同内容
- 两个程序集的位置：`Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.Admin/` 与 `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.Admin/`
- 桶首页：[mission API 分区](../)