---
title: "PartyWageModel"
description: "为队伍财务、欠薪逃兵和招募估值提供工资与招募成本规则的可替换模型。"
---
# PartyWageModel

**命名空间:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public abstract class PartyWageModel : MBGameModel<PartyWageModel>`  
**基类:** `MBGameModel<PartyWageModel>`  
**源文件:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyWageModel.cs`  
**默认实现:** `TaleWorlds.CampaignSystem.GameComponents/DefaultPartyWageModel.cs`

## 一句话职责

它计算单位基础工资、队伍每日总工资和一次性招募成本；它只报告财务结果，不扣金币、不移除单位，也不直接执行赎金。财务 tick、欠薪判断、招募界面和赎金估值可能重复读取这些结果，所以模型回调必须保持可重复且没有世界变更副作用。

## 心智模型

这个模型回答三个不同问题：单个 `CharacterObject` 的基础工资、一个 `TroopRoster` 的每日聚合工资、以及一个兵种的招募成本。`MobileParty.TotalWage` 读取第二个结果，欠薪逃兵模型据此判断风险，赎金/招募路径把第三个结果当作估值输入。不要因为调整其中一个结果，就隐式改变另外两个契约。

```text
CharacterObject / TroopRoster / MobileParty
              |
              v
Campaign.Current.Models.PartyWageModel
              |
              +--> GetCharacterWage
              +--> GetTotalWage
              +--> GetTroopRecruitmentCost
              |
              v
每日财务 / 逃兵判断 / 招募与赎金估值
```

默认实现还读取领袖、军需官、城镇驻军建筑、文化效果、政策和多个 Perk。`ExplainedNumber` 的说明只服务于预览与调试；真正的金币转移由财务行为和 `*Action` 完成，模型没有 Clan Treasury 的所有权。

### 生命周期与注册

`Campaign.Current.Models` 持有注册实例，默认类型是 `DefaultPartyWageModel`；mod 应在 `IGameStarter.AddModel` 阶段替换它。标题界面、模块加载早期或没有战役时不能读取 `Campaign.Current`。计算函数会被 UI、地图 AI、每日 tick 和赎金路径重复调用，所以必须保持无副作用并能处理同一输入的重复查询。

## 依赖图

### 上游

| 类型 | 关系 |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | 持有当前工资策略和 Model 注册表。 |
| [`MobileParty`](../../campaign/MobileParty) | 提供领袖、军需官、队伍组件、聚合 roster 和所在据点。 |
| [`TroopRoster`](../TroopRoster) | 提供成员数量、伤兵、俘虏和兵种条目。 |
| [`CharacterDevelopmentModel`](../CharacterDevelopmentModel) | 提供默认 Perk/技能阈值。 |

### 下游

| 类型 | 关系 |
| --- | --- |
| [`MobileParty`](../../campaign/MobileParty) | 通过 `TotalWage` 和 `TotalWageExplained` 暴露聚合结果，并读取最大付款上限。 |
| [`PartyDesertionModel`](../PartyDesertionModel) | 使用工资和付款能力判断欠薪逃兵；不会替模型扣钱。 |
| [`PartyComponent`](../PartyComponent) | 使用 `MaxWagePaymentLimit` 初始化或检查付款额度。 |
| [`Hero`](../../campaign/Hero) | 作为招募成本的买方或队伍成员输入。 |

### Action、事件与存档边界

工资模型没有自己的存档 payload，也不应在回调里调用 `GiveGoldAction`、逃兵 Action 或 roster 移除。若需求是“真的支付工资”“真的招募单位”，要沿用财务/招募行为的事件和 Action；模型只提供它们做判断和展示所需的数值。

## 成员契约

| 成员 | 用途 | 调用时机与副作用 |
| --- | --- | --- |
| `MaxWagePaymentLimit` | 队伍允许使用的最大工资付款上限；默认实现为 `10000`。 | 队伍初始化和欠薪检查；只读。 |
| `GetCharacterWage` | 按兵种 Tier 计算单位基础工资；默认 Tier 0–6 为 `1, 2, 3, 5, 8, 12, 17`，更高 Tier 为 `23`，Mercenary 再乘 `1.5` 后取整。 | roster 聚合和 AI 招募估算；不改变 `CharacterObject`。 |
| `GetTotalWage` | 聚合英雄、普通成员、文化、建筑、政策、驻军组成和 Perk 的每日工资，并可返回解释因素。 | `MobileParty.TotalWage`、财务 tick 和 UI 预览；不得扣金币。 |
| `GetTroopRecruitmentCost` | 按 troop level、装备马匹、职业和买方 Hero 的 Perk/文化计算一次性成本；`withoutItemCost` 控制是否排除马匹装备成本。 | 招募、升级/赎金估值；支持 `buyerHero == null`，不执行购买。 |

默认总工资会分别处理英雄与普通单位，并在适用时将 bandit、弩手、骑兵、商队护卫和 Mercenary 工资分组，再应用驻军建筑和相关 Perk。招募基础成本按等级区间从 `10` 到 `1500`，骑乘装备通常增加 `150` 或 `500`；Mercenary、Gangster 和 CaravanGuard 会增加职业成本。具体 Perk 数值应由当前版本默认模型提供，不要在 mod 中硬编码一份旧公式。

## 真实读取路径

### 读取每日工资

这与 `MobileParty.TotalWageExplained` 使用的路径一致：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

public ExplainedNumber ExplainDailyWage(MobileParty party)
{
    if (Campaign.Current == null || party == null)
    {
        return new ExplainedNumber(0f);
    }

    PartyWageModel model = Campaign.Current.Models.PartyWageModel;
    return model.GetTotalWage(party, party.MemberRoster, includeDescriptions: true);
}
```

### 读取招募成本

招募 UI 或赎金估值可以传入具体买方，也可能有意传入 `null`：

```csharp
using System;

public int ReadRecruitmentCost(CharacterObject troop, Hero buyer)
{
    ExplainedNumber cost = Campaign.Current.Models.PartyWageModel
        .GetTroopRecruitmentCost(troop, buyer, withoutItemCost: false);
    return Math.Max(0, cost.RoundedResultNumber);
}
```

返回值是预览，不能代替 `GiveGoldAction` 或招募 Action。若要显示 troop 基础成本而不含马匹装备，可以把 `withoutItemCost` 设为 `true`，但必须与调用者的语义保持一致。

## 替换模型时的安全做法

保存 vanilla 实例作为 delegate，然后只增加确定且有边界的调整。替换完成后不能再从 `Campaign.Current.Models.PartyWageModel` 查找“原模型”，否则会递归调用自己。自定义模型还必须保留空买方、驻军、英雄和伤兵 roster 等调用契约。

## 风险与调试顺序

1. **递归查找:** 替换后不要通过 Model 注册表再次获取 vanilla；在注册阶段保存显式 delegate。
2. **每日重复收费:** `GetTotalWage` 被多个消费者读取，在这里扣金币会让财务系统再次扣款。
3. **逃兵反馈振荡:** 欠薪逻辑读取工资；不要根据逃兵副作用再次修改工资或付款额度。
4. **空买方:** AI 和赎金估值可以传入 `buyerHero == null`，实现必须支持该契约。
5. **Roster 语义错误:** 不要把伤兵、俘虏、英雄和普通成员当成同一种条目，否则会改变逃兵和 UI 结果。
6. **版本漂移:** v1.4.5 默认实现继续加入海上/Perk 输入；优先委托当前版本模型，避免遗漏新因素。

## 版本与导航

v1.3.15 与 v1.4.5 都保留四个公开入口和 `Campaign.Current.Models.PartyWageModel` 的消费路径；默认工资细节会随 Perk、文化和驻军实现变化。跨版本 mod 只应依赖接口契约和当前版本的默认 delegate。

- [队伍模型目录](../models/)
- [父级：Campaign 扩展 API](../)
- [↔ PartySpeedModel](../PartySpeedModel)
- [↔ PartyDesertionModel](../PartyDesertionModel)
- [MobileParty](../../campaign/MobileParty)
- [Hero](../../campaign/Hero)
- [TroopRoster](../TroopRoster)
