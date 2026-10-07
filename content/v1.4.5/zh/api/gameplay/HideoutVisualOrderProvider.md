---
title: "HideoutVisualOrderProvider"
description: "藏身处战场的指令集提供者：只在有 HideoutMissionController 的任务里可用，且默认与旧版两套指令表完全独立——由 BannerlordConfig.OrderLayoutType 一个开关切换。"
---

# HideoutVisualOrderProvider

**Namespace:** `SandBox.View.OrderProviders`
**Module:** SandBox
**Type:** `internal class HideoutVisualOrderProvider : VisualOrderProvider`
**Base:** `VisualOrderProvider`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.OrderProviders/HideoutVisualOrderProvider.cs`

## 概述

`HideoutVisualOrderProvider` 是 284 行、4 个方法的**指令集提供者**。它只做两件事：告诉 UI「我这套指令现在能不能用」（`IsAvailable`，`:19-27`），以及「我这套指令具体是什么」（`GetOrders`，`:29-36`）。

关键结构是**两套完全独立的实现**：`GetDefaultOrders()`（`:38-161`）与 `GetLegacyOrders()`（`:163-283`），由 `BannerlordConfig.OrderLayoutType == 1` 这一个判断（`:31`）二选一。**两套都产出 movement / form / toggle 三组 `VisualOrderSet`，但组的构成与顺序不同** —— 旧版额外有独立的 facing 组（`:244`），且 `GenericVisualOrderSet` 的两个布尔参数取值相反（旧版 movement 是 `true, false`，新版是 `true, true`）。

## 心智模型

把它当成**「一份查表结果」**。三条推论：

第一,**它每次被问都重新 new 一遍整套指令对象。** `GetDefaultOrders` 的 `:107`/`:115`/`:127` 三次 `new GenericVisualOrderSet`，加上二十多个 `new ...VisualOrder`。**没有缓存、没有静态单例** —— 每次 `GetOrders()` 调用都产生一批新对象。

第二,**「手柄用户」与「键鼠用户」看到的是不同的指令表。** 两条实现都在末尾有一段 `if (!Input.IsGamepadActive)`：新版在 `:148-159` 额外塞 6 个 `SingleVisualOrderSet`；旧版在 `:268-281` 额外塞 5 个。**所以同一个藏身处战场，手柄玩家按不出「移动/阵型」的分组菜单，只能逐个按快捷指令。**

第三,**联机模式下有两个指令被删掉。** `:131`/`:132`（新版）与 `:266`/`:267`（旧版）都用三元表达式：`GameNetwork.IsMultiplayer ? null : new ...`。**AI 切换（`order_toggle_ai`）与 `TransferTroopsVisualOrder` 在联机里不存在**，而 `:136-143` / `:272-279` 用 null 检查把它们从列表里剔掉。

边界：**`internal` 类**，`VisualOrderProvider` 是 `TaleWorlds.MountAndBlade.View.VisualOrders` 里的基类。**mod 可以继承同类提供自己的指令表，但不能改这一份。**

## 如何使用

**怎么拿到它**：引擎按类型扫描 `VisualOrderProvider` 的实现，**逐个调 `IsAvailable()`，第一个返回 true 的胜出**。本类的 `IsAvailable`（`:19-27`）有两道门：`Mission.Current == null` 直接 false（`:22-25`），否则 `Mission.Current.HasMissionBehavior<HideoutMissionController>()`（`:26`）。

对应的公开面（藏身处任务的两个控制器）：

```csharp
using TaleWorlds.MountAndBlade;

// IsAvailable 的两道门（:22-25 与 :26）
// ① Mission.Current == null -> false（不在任务里就不给指令）
// ② Mission.Current.HasMissionBehavior<HideoutMissionController>() -> 藏身处专属任务
Debug.Print("藏身处战场的指令表只在 HideoutMissionController 存在时可用", 0);
```

复现「手柄用户少一半指令」的条件（两条实现都判 `Input.IsGamepadActive`）：

```csharp
using TaleWorlds.InputSystem;

bool gamepad = Input.IsGamepadActive;
// 新版 :148-159 多出 6 个 SingleVisualOrderSet；旧版 :268-281 多出 5 个
Debug.Print("Input.IsGamepadActive = " + gamepad + "（true 时指令表少一半分组菜单）", 0);
```

**用它最容易踩的一条**：**`ArrangementOrderEnum` 是靠裸整数传进去的，而 `line` 是 2、`close` 是 5，不是 0 和 1。** `:116`/`:117` 写 `(ArrangementOrderEnum)2` 与 `(ArrangementOrderEnum)5`；`:121` 的 circular 是 0、`:124` 的 column 是 1、`:120` 的 loose 是 3、`:125` 的 scatter 是 4、`:123` 的 v 形是 6、`:122` 的 schiltron 是 7。**新增阵型时若照着「以为 0=line」的直觉写会排错阵型，而运行时不会有任何报错。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `IsAvailable` | `public override bool IsAvailable()` | **两道门（`:19-27`）。** `:21` 取 `Mission.Current`、`:22-25` 为 null 则 false、`:26` 返回 `HasMissionBehavior<HideoutMissionController>()`。**它把「当前任务是不是藏身处战场」这件事变成了「指令表可不可用」。** 不查 `HideoutAmbushMissionController` —— **伏击版本的任务里本类同样可用**（只要也挂了 `HideoutMissionController`）。 |
| `GetOrders` | `public override MBReadOnlyList<VisualOrderSet> GetOrders()` | **唯一的分发点（`:29-36`）。** `:31` 判 `BannerlordConfig.OrderLayoutType == 1` → `:33` 走 `GetLegacyOrders()`；否则 `:35` 走 `GetDefaultOrders()`。**返回类型是 `MBReadOnlyList` 但两套实现每次都现造新对象**（`GetDefaultOrders` 的 `:160`、`GetLegacyOrders` 的 `:282`）。 |
| `GetDefaultOrders` | `private MBReadOnlyList<VisualOrderSet> GetDefaultOrders()` | **新版指令表（`:38-161`）。** `:40-105` 全是反编译器的 `//IL_` 注释（66 行噪声），真正代码从 `:106` 起。造 3 个 `GenericVisualOrderSet`：movement（`:107`，`true, true`，7 个指令）、form（`:115`，`true, true`，9 个阵型 + 1 个 Return）、toggle（`:127`，`false, false`，4-6 个）。**`:145-147` 把三组入列，`:148-159` 在非手柄时追加 6 个 `SingleVisualOrderSet`。** |
| `GetLegacyOrders` | `private MBList<VisualOrderSet> GetLegacyOrders()` | **旧版指令表（`:163-283`）。** 造 4 个 `GenericVisualOrderSet`：movement（`:236`，`true, false`）、**facing（`:244`，旧版独有）**、form（`:249`，`true, true`）、以及第四组（toggle）。**`:261-263` 入列前三组，`:264-267` 现造 toggle 指令，`:268-281` 在非手柄时追加 5 个 `SingleVisualOrderSet`。** 注意它返回 `MBList` 而新版返回 `MBReadOnlyList` —— **两个方法的返回类型不同**。 |

## 真实示例

八个阵型对应的 `ArrangementOrderEnum` 裸值（这是本类最该抄下来的一张表）：

```csharp
// 新版 GetDefaultOrders :116-125（旧版 :250-259 完全相同）
// (ArrangementOrderEnum)2  -> "order_form_line"       队列
// (ArrangementOrderEnum)5  -> "order_form_close"      密集
// (ArrangementOrderEnum)3  -> "order_form_loose"      松散
// (ArrangementOrderEnum)0  -> "order_form_circular"   环形
// (ArrangementOrderEnum)7  -> "order_form_schiltron"  刺猬
// (ArrangementOrderEnum)6  -> "order_form_v"          V 形
// (ArrangementOrderEnum)1  -> "order_form_column"     纵队
// (ArrangementOrderEnum)4  -> "order_form_scatter"    散开
Debug.Print("line=2 close=5 loose=3 circular=0 schiltron=7 v=6 column=1 scatter=4", 0);
```

toggle 组的四个指令与联机剔除规则（新版 `:127-144`）：

```csharp
// GenericVisualOrderSet("order_type_toggle", "{=0HTNYQz2}Toggle", false, false)   :127
// ToggleFacingVisualOrder("order_toggle_facing")                                  :128  始终加入
// GenericToggleVisualOrder("order_toggle_fire",  32, 31)                           :129  始终加入
// GenericToggleVisualOrder("order_toggle_mount", 34, 35)                           :130  始终加入
// GameNetwork.IsMultiplayer ? null : new GenericToggleVisualOrder("order_toggle_ai", 36, 37)  :131  联机为 null
// GameNetwork.IsMultiplayer ? null : new TransferTroopsVisualOrder()               :132  联机为 null
// :133-135 无条件加前三个；:136-143 对 null 做判空后再加；:144 最后加 ReturnVisualOrder
Debug.Print("联机时少 order_toggle_ai 与 TransferTroops", 0);
```

两套实现的实质差异对照（这是本类最容易被忽略的一条）：

```csharp
// 新版 GetDefaultOrders   :107 movement 组 = GenericVisualOrderSet("order_type_movement", ..., true, true)
// 旧版 GetLegacyOrders   :236 movement 组 = GenericVisualOrderSet("order_type_movement", ..., true, false)
//                                    ^ 第 4 个布尔参数不同；且旧版多一个 :244 的 "order_type_facing" 组
// BannerlordConfig.OrderLayoutType == 1 是切换开关（:31）
Debug.Print("OrderLayoutType==1 -> 旧版（多 facing 组、movement 组参数不同）", 0);
```

## 风险与边界

- **`internal` 类，编译期不可引用。** 只能继承同类另写一份。
- **`GetOrders` 每次调用都现造 20+ 个对象。** 没有缓存。**高频调用（例如 UI 每帧问）会产生大量垃圾。**
- **两个私有方法的返回类型不同。** `GetDefaultOrders` 返回 `MBReadOnlyList<VisualOrderSet>`（`:38`），`GetLegacyOrders` 返回 `MBList<VisualOrderSet>`（`:163`）—— 都强转成前者返回，但**签名不一致**。
- **`ArrangementOrderEnum` 靠裸整数。** 见「如何使用」。**没有具名常量保护，改枚举顺序会让全部阵型错位。**
- **`GenericVisualOrderSet` 的两个布尔参数在两套实现里取值相反。** `:107` 的 `true, true` vs `:236` 的 `true, false`。**我确认了字面值不同，但未读 `GenericVisualOrderSet` 的构造器签名去确定这两个布尔的语义** —— 见下条。
- **联机下两个指令消失。** `:131`/`:132` 与 `:266`/`:267`。**AI 切换与调兵在联机藏身处里按不出来。**
- **手柄用户少一半分组菜单。** `:148` / `:268` 的 `if (!Input.IsGamepadActive)`。**而这个条件读的是全局输入状态，不是本任务的设置。**
- **`GetDefaultOrders` 的前 66 行是反编译噪声。** `:40-105` 全是 `//IL_` 注释。**读这一页的源码时不要把那些行当逻辑。**
- **文案 key 在两套实现里部分复用。** `{=KiJd6Xik}Movement` 与 `{=iBk2wbn3}Form` 两套都有，但 toggle 组的 key 只在新版（`:127` 的 `{=0HTNYQz2}Toggle`），**旧版用的是 `{=psynaDsM}Facing`（`:244`）与两个 facing 单指令的 key（`:245`/`:246`）**。

## 依赖关系

- 基类：`bannerlord-1.4.5/Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.OrderProviders/HideoutVisualOrderProvider.cs:17` 的 `VisualOrderProvider`（`TaleWorlds.MountAndBlade.View.VisualOrders`）；被覆盖的两个成员是 `IsAvailable` 与 `GetOrders`
- 指令对象：`GenericVisualOrderSet` / `SingleVisualOrderSet`（`TaleWorlds.MountAndBlade.View.VisualOrders.OrderSets`）、`MoveVisualOrder` / `FollowMeVisualOrder` / `ChargeVisualOrder` / `FallbackVisualOrder` / `StopVisualOrder` / `RetreatVisualOrder` / `ReturnVisualOrder` / `ArrangementVisualOrder` / `ToggleFacingVisualOrder` / `GenericToggleVisualOrder` / `TransferTroopsVisualOrder`
- 判定条件：`Mission.Current.HasMissionBehavior<HideoutMissionController>()`（`:26`）、`BannerlordConfig.OrderLayoutType`（`:31`）、`GameNetwork.IsMultiplayer`（`:131`/`:132`/`:266`/`:267`）、`Input.IsGamepadActive`（`:148`/`:268`）
- 文案：[TextObject](../../localization/TextObject/)（`:107`/`:115`/`:127`/`:236`/`:244`/`:249` 的 `{=key}` 前缀）
- 同场景：[HideoutVisualOrderProvider] 服务的任务由 [MissionHideoutAmbushBossFightCinematicView](../MissionHideoutAmbushBossFightCinematicView/) 的过场与 [DefeatHideoutBossObjective](../DefeatHideoutBossObjective/) 的目标共同构成
- 同桶：[HideoutCinematicAgentInfo](../HideoutCinematicAgentInfo/)、[PlayerAlleyData](../PlayerAlleyData/)、[OppositionData](../OppositionData/)、[GauntletStoryModeMapCheatsView](../GauntletStoryModeMapCheatsView/)、[MapAudioManager](../MapAudioManager/)、[ArenaPreloadView](../ArenaPreloadView/)、[ModuleCheckResult](../ModuleCheckResult/)、[NameplateSize](../NameplateSize/)
- 桶首页：[gameplay API 分区](../)