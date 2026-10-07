---
title: "IAdminPanelTickable"
description: "「我这个选项需要每帧被 tick 一下」的标记接口：只有一个 OnTick(float)，而它把 AdminPanelOptionGroup 自己变成了被外层 provider 逐帧调用的对象。"
---

# IAdminPanelTickable

**Namespace:** `TaleWorlds.Multiplayer.Admin`（`TaleWorlds.MountAndBlade.Multiplayer.Admin`）
**Module:** Modules.Multiplayer / Modules.CustomBattle
**Type:** `internal interface IAdminPanelTickable`
**Base:** 无
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.Admin/IAdminPanelTickable.cs`

## 概述

`IAdminPanelTickable` 是 6 行、**1 个成员**的标记接口：`:3` 的 `internal interface IAdminPanelTickable` 与 `:5` 的 `void OnTick(float dt);`。**它没有任何基接口** —— 这是它与两个兄弟 `IAdminPanel*Internal` 的最大差别。

它有两类用法，**都是「被集合扫」而不是「被直接调」**：`AdminPanelOptionGroup` 同时实现它（`:7`）并持有 `MBList<IAdminPanelTickable> _tickableOptions`（`:19`），`:44` 把注册进来的选项 `is` 判定后收进这个列表，`:59` 逐个 `OnTick(dt)`。外层 `DefaultAdminPanelOptionProvider.cs:545` 则 `is IAdminPanelTickable` 判定后调用 —— **所以一个「选项组」也能被当选项 tick。**

## 心智模型

把它当成**「我要进 tick 队列」的自荐票****。三条推论：

第一,**它不继承任何东西，所以 `is` 判定是唯一的接入方式。** 兄弟 [IAdminPanelActionInternal](../IAdminPanelActionInternal/) 继承 `IAdminPanelAction`、`IAdminPanelOptionInternal](../IAdminPanelOptionInternal/) 不继承 —— **但三者都是 `is` 判定**。`AdminPanelOptionGroup.cs:44` 与 `:74` 两处形态完全一致：`if (x is IAdminPanelTickable item) { … }`。

第二,**「提供者」与「被提供者」是同一个类。** `AdminPanelOptionGroup.cs:7` 让它实现本接口，`:55` 用**显式接口实现**（`void IAdminPanelTickable.OnTick(float dt)`）转发给内部列表。**⇒ 一个选项组既是 tick 队列的持有者，又是队列的执行入口。**

第三,**这个接口在两个程序集里各有一份逐字节相同的定义。** 我实测 `diff`：`Modules.Multiplayer/…/IAdminPanelTickable.cs` 与 `Modules.CustomBattle/…/IAdminPanelTickable.cs` **内容完全相同**（各 6 行）。**⇒ 全树 9 处命中里，每个语义用法出现两次。** 排错时不要以为是两套逻辑。

## 如何使用

**怎么拿到它**：**编译期不可实现也不可引用** —— 它是 `internal`。唯一路径是让引擎自带的类实现它（`AdminPanelOptionGroup.cs:7`），或用反射。

复现「自荐票 → 队列 → 执行」这条链（这是本页唯一的内容）：

```csharp
using TaleWorlds.Localization;

// AdminPanelOptionGroup.cs 的三段（Modules.Multiplayer 与 Modules.CustomBattle 各有一份，内容相同）
//   :7   internal class AdminPanelOptionGroup : IAdminPanelOptionGroup, IAdminPanelTickable
//   :19  private readonly MBList<IAdminPanelTickable> _tickableOptions;
//   :38  _tickableOptions = new MBList<IAdminPanelTickable>();
//   :44  if (option is IAdminPanelTickable item)
//   :46      ((List<IAdminPanelTickable>)(object)_tickableOptions).Add(item);
//   :55  void IAdminPanelTickable.OnTick(float dt)                 ← 显式接口实现
//   :57  for (int i = 0; …Count; i++)
//   :59      ((List<IAdminPanelTickable>)(object)_tickableOptions)[i].OnTick(dt);
// 外层：DefaultAdminPanelOptionProvider.cs:545  if (…_optionGroups[i] is IAdminPanelTickable t)
TextObject note = new TextObject("{=my_tick}options tick through an is-check, not through inheritance");
Debug.Print(note.ToString(), 0);
```

**用它最容易踩的一条**：**实现在两个程序集里，「实现本接口」这个动作要在两份代码里各做一次。** 因为 `Modules.Multiplayer` 与 `Modules.CustomBattle` 各有自己的 `IAdminPanelTickable` 类型定义（内容逐字节相同但**类型不同**），**在一个程序集里实现它，对另一个程序集的类型检查是无效的。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `OnTick` | `void OnTick(float dt);` | **本接口的全部（`:5`）。** 被 `AdminPanelOptionGroup.cs:59` 逐个调用，形参 `dt` 原样透传（`:55` 的显式实现把它转发给内部列表的每个元素）。**接口声明里没有说明 `dt` 的单位** —— 我**未核查**它与 `MissionView.OnMissionScreenTick(float dt)` 的 `dt` 是否同源，**不断言二者是同一个时间基准**。 |

## 真实示例

「实现者」与「队列持有者」是同一个类（这是本接口最容易看错的地方）：

```csharp
// AdminPanelOptionGroup.cs
//   :7   类声明里就实现了 IAdminPanelTickable     ← 它是「被 tick 的」
//   :19  同时持有 List<IAdminPanelTickable>          ← 它是「tick 别人」的
//   :55  void IAdminPanelTickable.OnTick(float dt)   ← 显式实现，转发给 :57-59 的循环
// 所以一个选项组对 provider 而言是 tickable，对它内部的选项而言是 dispatcher
Debug.Print("既是 tickable 又是 dispatcher", 0);
```

两个程序集各一份的实测证据：

```csharp
// diff 结果（逐字节比较，两个文件各 6 行）：
//   Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.Admin/IAdminPanelTickable.cs
//   Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.Admin/IAdminPanelTickable.cs
//   => 内容完全相同
// 全树 9 处命中 = 4.5 个语义用法 x 2 个程序集：
//   AdminPanelOptionGroup.cs  :7  :19  :38  :44  :46  :55  :57  :59   (8 处，两份)
//   DefaultAdminPanelOptionProvider.cs :545                                  (1 处)
Debug.Print("9 处命中 = 2 个程序集 x 同一份逻辑", 0);
```

## 风险与边界

- **`internal interface`，编译期既不能实现也不能引用。** `:3`。**mod 只能靠反射碰它。**
- **零基接口。** 它不继承 `IAdminPanelAction` 或 `IAdminPanelOption` —— **所以 `is` 判定是唯一接入方式**，这与两个兄弟不同。
- **在两个程序集里各有一份定义，内容逐字节相同但类型不同。** 见「最容易踩的一条」。
- **全树唯一消费点是 `AdminPanelOptionGroup`** —— `:44` 收进队列、`:59` 逐个调。**外层 provider 的 `:545` 是第二处**。
- **`dt` 的时间基准：未核查。** 我没有追 `OnTick` 的调用者是谁调、那个 `dt` 从哪来，**不断言它等于任务 tick 的 dt**。
- **`OnTick` 是显式接口实现**（`:55`），**所以在 `AdminPanelOptionGroup` 上直接写 `group.OnTick(dt)` 编译不过** —— 必须转成接口或走 provider。

## 参见

- 兄弟接口：[IAdminPanelActionInternal](../IAdminPanelActionInternal/)（继承 `IAdminPanelAction`，6 行 1 成员）、[IAdminPanelOptionInternal](../IAdminPanelOptionInternal/)（21 行 6 成员 + 泛型变体）
- 唯一的实现者与消费者：`Modules.Multiplayer/…/AdminPanelOptionGroup.cs:7`/`:19`/`:38`/`:44`/`:46`/`:55`/`:57`//:59` 与 `Modules.CustomBattle/…/AdminPanelOptionGroup.cs`（同内容）、`DefaultAdminPanelOptionProvider.cs:545`
- 两个程序集的位置：`Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.Admin/` 与 `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.Admin/`（逐字节相同）
- 桶首页：[mission API 分区](../)