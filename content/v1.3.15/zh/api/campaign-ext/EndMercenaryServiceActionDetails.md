---
title: "EndMercenaryServiceActionDetails"
description: "区分雇佣关系因普通结束、离开王国或转为封臣而终止，并说明与王国成员事务的边界。"
---
# EndMercenaryServiceActionDetails

**命名空间：** `TaleWorlds.CampaignSystem.Actions`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public enum EndMercenaryServiceActionDetails`（`EndMercenaryServiceAction` 的嵌套类型）  
**基类：** `System.Enum`  
**源文件：** `TaleWorlds.CampaignSystem/Actions/EndMercenaryServiceAction.cs`

## 概述

记录一个氏族的雇佣兵身份为何结束，使同一布尔状态变更在事件监听器中仍能区分普通终止、离开王国和转为封臣三种业务流程。它由 `EndMercenaryServiceAction` 的三个公开入口产生，在氏族雇佣标记清除后随事件发送；它既不持有 `Clan`，也不替代王国成员状态机，因此真正退国、转投或转封臣仍必须由上游 `ChangeKingdomAction` 和对话流程组织。

## 心智模型

这个枚举是结束雇佣事务的原因标签，不是完整的“离开王国”状态机。`EndMercenaryServiceAction` 的私有 `Apply` 只调用 `Clan.EndMercenaryService(...)`，随后派发 `OnMercenaryServiceEnded`；在 v1.3.15 和 v1.4.5 的 `Clan` 实现中，当前可见效果都是把 `IsUnderMercenaryService` 设为 `false`。

关键边界是：`EndByLeavingKingdom` 的名字描述调用上下文，但它本身不会把 `Clan.Kingdom` 设为空，不会继承或解除战争，也不会完成领地和成员关系清理。内置 `ChangeKingdomAction` 会先后组织这些步骤。因此模组要让雇佣氏族真正退出王国时，应调用更上游的 `ChangeKingdomAction.ApplyByLeaveKingdomAsMercenary`，而不是孤立调用本 Action。

## Apply 契约与事件级联

```text
上游王国事务
  -> EndMercenaryServiceAction.EndBy*(clan)
       -> private Apply(clan, details)
            -> clan.EndMercenaryService(isByLeavingKingdom)
                 -> IsUnderMercenaryService = false
            -> OnMercenaryServiceEnded(clan, details)
  -> 上游继续处理 Kingdom、战争、通知等状态
```

事件同步发出，且监听器看到的 `clan.IsUnderMercenaryService` 已为 `false`。但当来源是 `ChangeKingdomAction` 时，事件所处的中间状态取决于上游顺序：离开王国路径在调用前已把 `clan.Kingdom` 设为空；转封臣或切换流程则可能仍在同一个更大的成员关系事务中。

## 原因值与真实调用时机

| 枚举值 | 公开入口 | 实际语义与调用者 |
|---|---|---|
| `ApplyByDefault` | `EndByDefault(clan)` | 单纯结束现有雇佣身份，为另一个王国成员状态让路。1.4.5 的 `ChangeKingdomAction` 在氏族以封臣身份加入/转投时先调用它。 |
| `ApplyByLeavingKingdom` | `EndByLeavingKingdom(clan)` | 雇佣氏族正在离开当前王国。`ChangeKingdomAction` 在清空 `Clan.Kingdom` 后调用；`StartMercenaryServiceAction` 切换已有雇佣关系时也会调用。 |
| `ApplyByBecomingVassal` | `EndByBecomingVassal(clan)` | 玩家对话已选择从雇佣兵转为封臣时使用。`LordConversationsCampaignBehavior` 是 1.4.5 的真实调用点。 |

三个入口当前共享同一底层布尔变更，但原因会进入公开事件。不要因为当前 `Clan.EndMercenaryService(bool)` 没有读取布尔参数，就把三个入口随意互换；下游模组和未来版本可以依赖该语义。

## 依赖与上下游边界

| 方向 | 类型与作用 |
|---|---|
| 上游状态机 | [`ChangeKingdomAction`](../ChangeKingdomAction) 负责氏族加入、离开、叛乱、战争继承与和平清理；它是“离开王国”的正确入口。 |
| 配对入口 | [`StartMercenaryServiceAction`](../StartMercenaryServiceAction) 设置 `Clan.Kingdom`、奖励倍率、雇佣标记及玩家续约时间，再派发开始事件。 |
| 核心对象 | [`Clan`](../../campaign/Clan) 持久化 `Kingdom`、`IsUnderMercenaryService`、债务和雇佣奖励等状态。结束 Action 只触及其中的雇佣标记。 |
| 下游事件 | [`CampaignEvents`](../CampaignEvents) 的 `OnMercenaryServiceEndedEvent` 传递氏族和本枚举，适合 Behavior 清理自己的合同缓存。 |

## 风险、存档与生命周期

- 不要直接写 `Clan.IsUnderMercenaryService`，也不要通过反射改 backing field。这样会漏掉结束事件，依赖合同状态的 Behavior 无法清理。
- 不要把 `EndByLeavingKingdom` 当作完整退国 API。单独调用后，氏族仍可能保留 `Kingdom` 和战争关系，却不再被视为雇佣兵；把这种中间状态存入存档会让外交、工资和对话判断互相矛盾。
- Action 没有验证 `clan` 非空或确实处于雇佣状态。重复调用会重复派发事件，即使底层布尔值已经是 `false`；调用方应检查当前状态。
- `OnMercenaryServiceEndedEvent` 的监听器是非序列化生命周期对象，通常在 `CampaignBehaviorBase.RegisterEvents` 注册。读档不会重放旧事件；模组持久化合同缓存时必须在 `SyncData` 后用当前 `Clan` 状态校正。
- 不要在读档构造期或王国/氏族集合迭代中孤立执行。完整的成员关系变更会继续修改战争和集合，应在明确的战役命令回调中交给 `ChangeKingdomAction`。

## 真实获取路径示例

下面从主角取得真实氏族，并通过完整的王国 Action 离开雇佣关系。该上游入口会在正确顺序调用 `EndByLeavingKingdom`，事件监听器收到的原因就是 `ApplyByLeavingKingdom`：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

Clan playerClan = Hero.MainHero.Clan;

if (playerClan != null &&
    playerClan.Kingdom != null &&
    playerClan.IsUnderMercenaryService)
{
    ChangeKingdomAction.ApplyByLeaveKingdomAsMercenary(playerClan);
}
```

如果目标是留在同一王国并转为封臣，应让对应加入/对话流程选择 `EndByBecomingVassal`，不能先用退国路径再手工补 `Clan.Kingdom`。

## 版本注记

v1.3.15 与 v1.4.5 都在 `TaleWorlds.CampaignSystem` 中定义相同三个枚举值和三个公开入口；私有 `Apply` 的顺序也都是“清除雇佣标记后派发事件”。当前两版 `Clan.EndMercenaryService(bool)` 的可见实现只清除标记，但模组仍应保留原因入口，避免把实现细节当成长期 API 保证。

## 导航

- ↑ Parent：[战役扩展 API](./)
- ↔ Sibling：[EndMercenaryServiceAction](../EndMercenaryServiceAction) · [StartMercenaryServiceAction](../StartMercenaryServiceAction)
- Related：[ChangeKingdomAction](../ChangeKingdomAction) · [Clan](../../campaign/Clan) · [CampaignEvents](../CampaignEvents)
