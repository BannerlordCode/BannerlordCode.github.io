# MobileParty / MobileParty

**Namespace**: TaleWorlds.CampaignSystem.Party
**File**: `bannerlord-1.3.0/TaleWorlds.CampaignSystem/Party/MobileParty.cs`
**Version**: v1.3.0

## 概述 / Overview

`MobileParty` 是战役系统中可移动的部队，代表在地图上移动的军队、商队或劫匪队伍。每个 MobileParty 都有一个 PartyBase 用于存储共享数据，以及一个 MobilePartyAi 用于控制 AI 行为。

`MobileParty` is a mobile party in the campaign system, representing armies, caravans, or bandit parties moving on the map. Each MobileParty has a PartyBase for shared data storage and a MobilePartyAi for AI behavior control.

## 与 v1.3.15 的差异 / Differences from v1.3.15

- v1.3.0 的 MobileParty 比 v1.3.15 小很多（约 5100 行 vs v1.3.15 的更大规模）
- v1.3.0 MobileParty is much smaller than v1.3.15 (about 5100 lines vs larger in v1.3.15)
- 更简单的 AI 系统
- Simpler AI system
- 缺少一些 v1.3.15 中新增的部队功能
- Missing some party features added in v1.3.15
- 没有或更少的高级导航系统
- No or fewer advanced navigation systems
- 简化的人员配置系统
- Simplified staffing systems

## 关键属性 / Key Properties

| Property | Type | Description |
|----------|------|-------------|
| Party | PartyBase | 获取关联的 PartyBase / Gets associated PartyBase |
| Ai | MobilePartyAi | 获取 AI 控制器 / Gets AI controller |
| IsActive | bool | 是否活跃 / Whether is active |
| Position | CampaignVec2 | 获取位置 / Gets position |
| Name | TextObject | 获取名称 / Gets name |
| MemberRoster | TroopRoster | 获取成员列表 / Gets member roster |
| PrisonRoster | TroopRoster | 获取囚犯列表 / Gets prisoner roster |
| ItemRoster | ItemRoster | 获取物品列表 / Gets item roster |

## 关键方法 / Key Methods

| Method | Description |
|--------|-------------|
| SetMoveGatherMode | 设置移动集合模式 / Set move and gather mode |
| SetMoveTargetParty | 设置移动目标部队 / Set move target party |
| SetMoveTargetSettlement | 设置移动目标定居点 / Set move target settlement |

## 代码示例 / Code Example

```csharp
// Access mobile party
MobileParty party = someMobileParty;

// Check if active
if (!party.IsActive)
    return;

// Get position
CampaignVec2 position = party.Position;

// Access rosters
TroopRoster members = party.MemberRoster;

// Access AI
MobilePartyAi ai = party.Ai;
ai.SetMoveTargetSettlement(targetSettlement);
```

## 注意事项 / Notes

- MobileParty 通过 PartyBase 存储共享数据
- MobileParty stores shared data through PartyBase
- AI 行为通过 MobilePartyAi 控制
- AI behavior is controlled through MobilePartyAi
- 部队可以在地图上移动并参与战斗
- Parties can move on the map and participate in battles
- 部队需要食物来维持
- Parties need food to sustain themselves
