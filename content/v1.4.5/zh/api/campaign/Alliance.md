---
title: "Alliance"
description: "AllianceCampaignBehavior 持有的内部值类型：记录两个 Kingdom 之间有时限（EndTime）的结盟关系，是外交联盟在战役运行期与存档中的唯一权威表示；创建、延期与解除都由 AllianceCampaignBehavior 驱动，Kingdom 通过缓存的 AlliedKingdoms 暴露盟友集合。"
---
# Alliance

**命名空间：** `TaleWorlds.CampaignSystem`（定义于 `TaleWorlds.CampaignSystem.CampaignBehaviors` 命名空间内的 `AllianceCampaignBehavior` 类型里）  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `internal struct Alliance(Kingdom, Kingdom, CampaignTime)`  
**源文件：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/AllianceCampaignBehavior.cs`（第 38 行，`Alliance` 作为 `AllianceCampaignBehavior` 的内部类型声明）

## 概述

`Alliance` 是 `AllianceCampaignBehavior` 内部声明的 `internal struct`，表示两个 `Kingdom` 之间一段**有时限**的结盟：它只持有结盟双方（`Kingdom1` / `Kingdom2`）与到期时间（`EndTime`）。联盟并不是 `Kingdom` 自己身上的字段，而是集中存放在 `AllianceCampaignBehavior` 的私有列表 `_alliances` 中；`Kingdom.AlliedKingdoms` 只是对它的缓存视图。联盟的创建（`AddAlliance`）、延期（`UpdateAllianceEndTime` / `StartCallToWarAgreement`）与到期/破坏解除（`EndAlliance`、`OnWarDeclared`、`OnKingdomDestroyed`）全部由该 Behavior 在外交事件与每日 tick 中推进，因此 `Alliance` 是联盟状态在运行期与存档里的权威载体，而不是 mod 应直接构造或写入的对象。

## 心智模型

把 `Alliance` 想成 **AllianceCampaignBehavior 私有列表里的一条「结盟记录」**，而不是王国身上的一个属性：

- **它是什么**：一个基本不可变的值（两个 Kingdom 为 `readonly`，只有 `EndTime` 可变）记录「A 与 B 结盟到某时刻」。它不持有任何逻辑，只承载数据，并被 `[SaveableField]` 标注后整体序列化进存档。
- **它在哪一层**：纯 Campaign（外交）层，由 `AllianceCampaignBehavior` 持有。`Alliance` 本身是 `internal`，mod 代码拿不到它的直接引用；你能读的「当前是否结盟」来自 `Kingdom.IsAllyWith` / `Kingdom.AlliedKingdoms`，能读的「何时到期」来自 `IAllianceCampaignBehavior.GetAllianceEndDate`。
- **生命周期**：联盟在 `StartAlliance` → `AddAlliance` 中被创建，`EndTime = CampaignTime.Now + Campaign.Current.Models.AllianceModel.MaxDurationOfAlliance`（默认 84 天）。当一方与他方宣战（`OnWarDeclared`）或王国被灭（`OnKingdomDestroyed`），或 `DailyTickClan` 发现 `EndTime.IsPast` 时，联盟被 `EndAlliance` 移除；解除会触发 `UpdateAlliedKingdoms` 刷新双方缓存、并广播 `OnAllianceStarted` / `OnAllianceEnded`。
- **与外交/战争状态的关系**：`Alliance` 与 `StanceLink`、宣战/媾和事件紧密耦合——两个盟友之间宣战会先触发 `ApplyBrokenAlliancePenalty`（-100 关系）再 `EndAlliance`。所以「盟友」是派生状态：先有 `Alliance` 记录，`Kingdom.AlliedKingdoms` 才把它列为盟友。
- **何时读 / 何时不要直接改**：读用 `Kingdom.IsAllyWith`、`AlliedKingdoms`、`GetAllianceEndDate` 与 `EndTime.IsPast`；**不要** `new Alliance(...)`、不要改 `EndTime`、不要把记录塞进 `_alliances`——任何创建/延期/解除都必须走 `AllianceCampaignBehavior` 的公开接口（经 `IAllianceCampaignBehavior`）与外交 `Action` / `KingdomDecision`，否则 `AlliedKingdoms` 缓存、关系变化、事件与存档都会失同步。

## 何时使用 / 何时不要使用

- **使用**：查询两个王国是否结盟（`Kingdom.IsAllyWith`）、遍历某王国的盟友（`Kingdom.AlliedKingdoms`）、读取某条联盟的到期时间（`IAllianceCampaignBehavior.GetAllianceEndDate`）并在 `DailyTick` / 外交回调里判断 `EndTime.IsPast`。
- **使用（发起 / 解除）**：通过 `IAllianceCampaignBehavior.StartAlliance` / `EndAlliance`，或经 `StartAllianceDecision` 这类 `KingdomDecision` 走王国投票；让盟友参战用 `StartCallToWarAgreement`（会顺带延期母联盟）。
- **不要**：不要 `new Alliance(...)` 并手动加入内部列表；不要直接写 `EndTime` 来「续约」（延期应由 `StartCallToWarAgreement` / `UpdateAllianceEndTime` 以不可变替换方式完成）；不要持有 `Alliance` 实例引用做长期状态——它是值类型且 `internal`，读档后来自新列表；不要绕过外交流程直接改字段，以免破坏 `AlliedKingdoms` 与关系链。

## 依赖图

- 上游 / 持有者：
  - [AllianceCampaignBehavior](../AllianceCampaignBehavior) 声明并持有 `Alliance`（`_alliances` 列表），负责创建 / 延期 / 解除，并通过 `IAllianceCampaignBehavior` 暴露查询接口。
  - [Kingdom](../Kingdom) 经 `AlliedKingdoms` 与 `IsAllyWith` 暴露联盟缓存，由 `UpdateAlliedKingdoms` 依据 `IsAllyWithKingdom` 重建。
  - [Campaign](../Campaign) 提供 `CampaignTime.Now`、模型管理器（`Campaign.Current.Models.AllianceModel`）与 `GetCampaignBehavior<IAllianceCampaignBehavior>()`。
- 下游 / 相关：
  - [AllianceModel](../AllianceModel) / [DefaultAllianceModel](../DefaultAllianceModel) 决定 `MaxDurationOfAlliance`（默认 84 天）、`MaxNumberOfAlliances`（2）、`GetCallToWarCost` 等。
  - [CallToWarAgreement](../CallToWarAgreement) 是盟友参战的子协议；`StartCallToWarAgreement` 会顺带延期母联盟。
  - [StanceLink](../StanceLink) 承载两王国间的外交姿态；宣战会解除联盟。
  - [StartAllianceDecision](../StartAllianceDecision)（及 [ProposeCallToWarAgreementDecision](../ProposeCallToWarAgreementDecision) / [AcceptCallToWarAgreementDecision](../AcceptCallToWarAgreementDecision)）是结盟 / 参战的王国决策入口。
  - [CampaignEvents](../CampaignEvents) / [CampaignEventDispatcher](../CampaignEventDispatcher) 广播 `OnAllianceStarted` / `OnAllianceEnded` / `OnCallToWarAgreement*`。

## 风险

- **直接构造 / 写入绕过外交流程**：`Alliance` 是 `internal` 且由私有 `_alliances` 持有；自行 `new` 或改 `EndTime` 不会更新 `Kingdom.AlliedKingdoms` 缓存，也不会广播 `OnAllianceStarted` / `OnAllianceEnded`，导致 UI、AI、外交评分（`DefaultAllianceModel.GetAllianceFactorForDeclaringWar` 等）与存档不一致。
- **引用已灭 Kingdom**：`Kingdom1` / `Kingdom2` 指向 `Kingdom` 实例；若一方被灭（`OnKingdomDestroyed`）后你仍持有旧 `Alliance` 引用并访问其 `Kingdom1` / `Kingdom2`，可能读到已淘汰派系的脏数据。查询永远走 `Kingdom.IsAllyWith` / `GetAllianceEndDate`，而非缓存 struct 引用。
- **到期未清理窗口**：`EndTime` 只是标记；真正移除发生在 `DailyTickClan` 发现 `IsPast` 时。若你在 tick 之间假定联盟仍有效、而它已过期且尚未被该 tick 清理，会得到「逻辑上已结束但集合里还在」的短暂窗口；判断结盟状态应以 `IsAllyWith` 为准，并以 `EndTime.IsPast` 复核。`GetAllianceEndDate` 在找不到联盟时会触发 `Debug.FailedAssert("Cant find alliance")` 并返回 `CampaignTime.Zero`，不要对未结盟双方调用它。
- **不可变替换的语义**：`EndTime` 是唯一可变字段；延期并非原地改值，而是 `UpdateAllianceEndTime` 用 `new Alliance(...)` 整体替换列表中的元素（仅当新 `EndTime` 更大时）。你若持有旧 `Alliance` 值副本，其 `EndTime` 不会随延期更新。
- **存档序列化**：`Alliance` 经 `SaveableTypeDefiner`（`AllianceCampaignBehaviorTypeDefiner`，容器 `List<Alliance>`）序列化。`EndTime` 是 `CampaignTime`（可被序列化），两个 Kingdom 以引用方式保存；读档后 `AlliedKingdoms` 由 `RefreshAlliedKingdoms` 重建，旧引用不能当永久句柄。

## 成员说明

`Alliance` 是值类型，成员即其携带的数据（除自动生成的存档胶水代码外，没有方法）。

### 结盟双方

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `Kingdom1`（`readonly Kingdom`，`[SaveableField(0)]`，line 41） | 结盟一方。由 `AddAlliance` 在创建时写入，之后不可变；与 `Kingdom2` 顺序无关（`TryGetAlliance` / `RemoveAlliance` 双向匹配）。读取即可判断是否包含某王国，但判断结盟应改用 `Kingdom.IsAllyWith`。 |
| `Kingdom2`（`readonly Kingdom`，`[SaveableField(1)]`，line 44） | 结盟另一方，语义同 `Kingdom1`。两个 `readonly` 字段合起来唯一标识一条联盟记录。 |

### 到期时间

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `EndTime`（`CampaignTime`，`[SaveableField(2)]`，line 47） | 联盟失效的时刻，创建时 = `CampaignTime.Now + AllianceModel.MaxDurationOfAlliance`（默认 84 天）。是唯一可变字段。判断是否到期用 `EndTime.IsPast`；延期由 `UpdateAllianceEndTime` 以 `new Alliance(...)` 整体替换实现（仅当新值更大）。`IAllianceCampaignBehavior.GetAllianceEndDate` 返回的即是它。 |

### 序列化辅助（自动生成，勿调用）

`AutoGeneratedStaticCollectObjectsAlliance` / `AutoGeneratedInstanceCollectObjects` 收集 `Kingdom1`、`Kingdom2` 与 `CampaignTime` 的引用供 SaveSystem 使用；`AutoGeneratedGetMemberValueKingdom1` / `AutoGeneratedGetMemberValueKingdom2` / `AutoGeneratedGetMemberValueEndTime` 供存档反射读取字段。这些是 SaveSystem 生成的胶水代码，mod 不应直接调用或依赖其签名。

### 真实调用点（均位于 AllianceCampaignBehavior，用来定位本类型）

- `AddAlliance`（line 445）：`new Alliance(kingdom1, kingdom2, CampaignTime.Now + Campaign.Current.Models.AllianceModel.MaxDurationOfAlliance)` 后加入 `_alliances`，并触双方 `UpdateAlliedKingdoms`。
- `TryGetAlliance`（line 502）：遍历 `_alliances`，按 `Kingdom1` / `Kingdom2` 双向匹配取出记录，供 `IsAllyWithKingdom` / `GetAllianceEndDate` 复用。
- `UpdateAllianceEndTime`（line 518）：仅当新 `EndTime` 更大时，用 `new Alliance(...)` 替换列表中的旧记录，实现联盟延期。
- `DailyTickClan`（line 643）：对每对盟友检查 `foundAlliance.EndTime.IsPast`，过期则 `EndAlliance`。
- `RemoveAlliance`（line 454）/ `OnWarDeclared`（line 670）/ `OnKingdomDestroyed`（line 735）：在宣战破坏或王国被灭时移除相关联盟。

## 示例

### 示例 1：查询两个王国是否结盟并读取到期时间

真实获取路径：结盟状态来自 `Kingdom.IsAllyWith` / `AlliedKingdoms`，到期时间来自 `IAllianceCampaignBehavior.GetAllianceEndDate`——两者都建立在 `Alliance` 记录之上。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;

// 拿到联盟 Behavior 的公开接口（不要直接碰 internal 的 Alliance 列表）
IAllianceCampaignBehavior allianceBehavior =
    Campaign.Current.GetCampaignBehavior<IAllianceCampaignBehavior>();

// 是否为盟友：底层等价于查看 Kingdom.AlliedKingdoms 缓存
if (kingdomA.IsAllyWith(kingdomB))
{
    // 取该条 Alliance 的 EndTime（未结盟时返回 CampaignTime.Zero 并触发断言，先判 IsAllyWith）
    CampaignTime endDate = allianceBehavior.GetAllianceEndDate(kingdomA, kingdomB);
    bool isExpired = endDate.IsPast;   // 通常用 IsPast 判断，而非与 Now 比较
}
```

`IsAllyWith` 来自 `Kingdom.AlliedKingdoms.ContainsQ`，该缓存由 `UpdateAlliedKingdoms` 依据 `AllianceCampaignBehavior.IsAllyWithKingdom` 重建；`GetAllianceEndDate` 在找不到联盟时返回 `CampaignTime.Zero` 并 `Debug.FailedAssert`，所以务必先确认结盟。

### 示例 2：在每日 tick 中遍历盟友并检查到期

`Kingdom.AlliedKingdoms` 是 `MBReadOnlyList<Kingdom>`，按它遍历即可拿到每个盟友；是否真正到期仍应看 `GetAllianceEndDate(...).IsPast`（与 `DailyTickClan` 内部逻辑一致）。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;

IAllianceCampaignBehavior allianceBehavior =
    Campaign.Current.GetCampaignBehavior<IAllianceCampaignBehavior>();

// 遍历本王国当前盟友缓存（已是 AllianceCampaignBehavior 派生出的列表）
foreach (Kingdom ally in myKingdom.AlliedKingdoms)
{
    CampaignTime endDate = allianceBehavior.GetAllianceEndDate(myKingdom, ally);
    if (endDate.IsPast)
    {
        // 联盟实际到期由 AllianceCampaignBehavior.DailyTickClan 统一处理；
        // 这里只做观察 / 预警，真正解除走 EndAlliance / 外交事件
    }
}
```

不要自己 `new Alliance` 或改 `EndTime` 来「续约」；延期是 `StartCallToWarAgreement` 触发 `UpdateAllianceEndTime` 以不可变替换完成的。`AlliedKingdoms` 与 `EndTime` 都可能在 tick 之间变化，使用前重新查询而非长期持有 struct 引用。

## 版本注记

本页以 v1.4.5 `AllianceCampaignBehavior.cs`（第 38 行 `internal struct Alliance(...)`）为准，并交叉核对 `Kingdom.cs` 的 `AlliedKingdoms` / `IsAllyWith` / `UpdateAlliedKingdoms` 与 `DefaultAllianceModel.cs` 的 `MaxDurationOfAlliance`。注意 `Alliance` 是 `internal` 值类型，运行期权威列表为 `AllianceCampaignBehavior._alliances`；跨版本使用时重新核对 `MaxDurationOfAlliance`（默认 84 天）、`MaxNumberOfAlliances`（2）以及 `SaveableTypeDefiner` 的容器定义。

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[AllianceCampaignBehavior](../AllianceCampaignBehavior)（持有并管理 `Alliance`）· [Kingdom](../Kingdom)（经 `AlliedKingdoms` / `IsAllyWith` 暴露盟友）· [Campaign](../Campaign)（提供 `CampaignTime` 与模型 / Behavior 访问）· [AllianceModel](../AllianceModel) / [DefaultAllianceModel](../DefaultAllianceModel)（联盟时长与上限）· [CallToWarAgreement](../CallToWarAgreement)（盟友参战子协议）· [StanceLink](../StanceLink)（外交姿态，宣战会解除联盟）· [StartAllianceDecision](../StartAllianceDecision)（结盟王国决策）
