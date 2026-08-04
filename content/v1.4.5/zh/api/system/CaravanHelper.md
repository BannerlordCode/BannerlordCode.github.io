---
title: "CaravanHelper"
description: "从文化的普通或精英模板集合中选择陆路或海路商队 PartyTemplate 的 Campaign 辅助。"
---
# CaravanHelper

**命名空间：** `Helpers`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public static class CaravanHelper`  
**基类：** `System.Object`  
**源文件：** `bin/TaleWorlds.CampaignSystem/Helpers/CaravanHelper.cs`

## 一句话职责

`CaravanHelper` 根据 [CultureObject](../../campaign/CultureObject) 为普通或精英商队选择合适的 [PartyTemplateObject](../../campaign/PartyTemplateObject)，并按模板是否拥有船体筛选陆路或海路模板。

## 心智模型

这个 helper 只选择模板，不创建商队。`GetRandomCaravanTemplate` 在 `culture.EliteCaravanPartyTemplates` 和 `culture.CaravanPartyTemplates` 之间选择，再使用私有的适配规则：

- `isLand == true` 只接受 `ShipHulls.Count` 为零的模板。
- `isLand == false` 只接受 `ShipHulls.Count` 大于零的模板。

返回的模板仍然只是 stacks 和船体定义；调用方负责创建或补充 [MobileParty](../../campaign/MobileParty)、加入 roster，并应用队伍容量或船只上限。`CaravanHelper` 自身不读取 `Campaign.Current`，也不修改 roster 或创建队伍。

## 什么时候使用，什么时候不要使用

- **适合：** 商队行为已经取得商队 owner 的文化，需要兼容的陆路或海路模板时调用。
- **适合：** 把模板 stacks 换算为补充 roster 之前调用，`CaravansCampaignBehavior` 的 convoy 补充流程就是这样使用的。
- **不要：** 用它创建 `MobileParty`、分配 owner 或直接把模板 stacks 写入 roster。
- **不要：** 把无关 Settlement 的文化传入；文化对象拥有本次选择要读取的普通/精英模板集合。
- **不要把 `isLand` 当成“偏好陆路”的提示：** 它是对 `ShipHulls.Count` 的精确筛选。

## 依赖关系

- 输入：[CultureObject](../../campaign/CultureObject)，包括 `CaravanPartyTemplates` 和 `EliteCaravanPartyTemplates`。
- 输出：[PartyTemplateObject](../../campaign/PartyTemplateObject)、其 `Stacks` 和 `ShipHulls`。
- 典型宿主：[MobileParty](../../campaign/MobileParty) 及其 `CaravanPartyComponent`；调用方决定商队是否精英以及是否走陆路/海路。
- Campaign 上下文：[Campaign](../../campaign/Campaign) 和 [Settlement](../../campaign/Settlement) 为调用方提供文化，但 helper 自己的方法体不依赖 Campaign 单例。
- 消费者：`CaravansCampaignBehavior`、商队对话和商队/商人 issue behavior 在创建或补充 convoy 前使用返回模板。

## 公开成员

### GetRandomCaravanTemplate

`GetRandomCaravanTemplate(CultureObject culture, bool isElite, bool isLand)` 在 `isElite` 为 `true` 时从精英集合选择，否则从普通集合选择，然后只保留符合陆路/海路 `ShipHulls` 规则的模板。

```csharp
MobileParty convoy = MobileParty.MainParty;
if (convoy != null && convoy.Owner != null && convoy.CaravanPartyComponent != null)
{
    PartyTemplateObject template = CaravanHelper.GetRandomCaravanTemplate(
        convoy.Owner.Culture,
        convoy.CaravanPartyComponent.IsElite,
        isLand: false);
}
```

这对应 `CaravansCampaignBehavior.RefillConvoyTroops` 的获取形状；该行为之后才会用模板计算 roster 增量。

## 真实示例

下面取得真实活动商队并查询海路模板，不伪造文化，也不创建队伍。拥有 convoy 的行为可以在自己的补充时机读取模板实际 stacks。

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;

public static class CaravanTemplateInspection
{
    public static PartyTemplateObject FindNavalTemplate()
    {
        if (Campaign.Current == null)
        {
            return null;
        }

        MobileParty convoy = MobileParty.All
            .FirstOrDefault(party => party.IsCaravan && party.IsActive && party.Owner != null);
        if (convoy == null || convoy.CaravanPartyComponent == null)
        {
            return null;
        }

        return CaravanHelper.GetRandomCaravanTemplate(
            convoy.Owner.Culture,
            convoy.CaravanPartyComponent.IsElite,
            isLand: false);
    }
}
```

helper 返回的是模板，不是已填充 roster。补充代码仍需尊重 `convoy.Party.PartySizeLimit`、stack 数量、船只上限和商队 behavior 的生命周期。

## 风险与存档边界

- **文化有效性：** 空或未完成的 `CultureObject` 无法提供方法读取的集合；应从实时商队 owner 或当前 Settlement 取得文化。
- **模板可用性：** 结果取决于文化配置的普通/精英集合和精确的 `ShipHulls` 筛选；不要假设每种文化都同时有陆路和海路候选。
- **工厂边界：** 返回的 `PartyTemplateObject` 不创建队伍、不分配 Hero，也不更新 `MemberRoster` 或船只。
- **精英标志：** `isElite` 选择不同集合；它不会升级普通模板，也不会改变 `CaravanPartyComponent.IsElite`。
- **存档边界：** 模板和文化是定义对象；不要把一次随机选择当作商队可变 roster 保存。应通过受支持的 Campaign 存档路径保存 owner 队伍或 behavior 状态。

## 版本注记

本页按 v1.4.5 `Helpers/CaravanHelper.cs` 编写。陆路/海路选择只由 `ShipHulls.Count == 0` 与 `> 0` 实现；速度、容量、owner 和 roster 决策仍属于商队 behavior。

## 导航

- [↑ API 系统索引](../)
- [相关：MobileParty](../../campaign/MobileParty)
- [相关：CultureObject](../../campaign/CultureObject)
- [相关：PartyTemplateObject](../../campaign/PartyTemplateObject)
- [相关：Campaign](../../campaign/Campaign)
