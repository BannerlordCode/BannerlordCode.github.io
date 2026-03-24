# PartyBase / PartyBase

**Namespace**: TaleWorlds.CampaignSystem.Party
**File**: `bannerlord-1.3.0/TaleWorlds.CampaignSystem/Party/PartyBase.cs`
**Version**: v1.3.0

## 概述 / Overview

`PartyBase` 是战役系统中部队（Party）的基础类，用于管理部队的通用数据，如位置、成员、囚犯、物品和食物等。PartyBase 既可以代表移动部队（MobileParty），也可以代表定居点（Settlement）。

`PartyBase` is the base class for parties in the campaign system, managing common party data such as position, members, prisoners, items, and food. PartyBase can represent both mobile parties (MobileParty) and settlements (Settlement).

## 与 v1.3.15 的差异 / Differences from v1.3.15

- v1.3.0 的 PartyBase 结构相对简单
- v1.3.0 PartyBase has a relatively simpler structure
- TaleWorlds.SaveSystem 在 v1.3.0 中已经存在，但保存系统实现有所不同
- TaleWorlds.SaveSystem exists in v1.3.0 but save system implementation differs
- 更少的组件接口（ComponentInterface）集成
- Fewer ComponentInterface integrations
- 缺少一些 v1.3.15 中新增的派对相关功能
- Missing some party-related features added in v1.3.15

## 关键属性 / Key Properties

| Property | Type | Description |
|----------|------|-------------|
| Settlement | Settlement | 获取关联的定居点 / Gets associated settlement |
| MobileParty | MobileParty | 获取关联的移动部队 / Gets associated mobile party |
| IsSettlement | bool | 是否是定居点 / Whether is a settlement |
| IsMobile | bool | 是否是移动部队 / Whether is a mobile party |
| MemberRoster | TroopRoster | 获取成员列表 / Gets member roster |
| PrisonRoster | TroopRoster | 获取囚犯列表 / Gets prisoner roster |
| ItemRoster | ItemRoster | 获取物品列表 / Gets item roster |
| Position | CampaignVec2 | 获取位置 / Gets position |
| Name | TextObject | 获取名称 / Gets name |

## 关键方法 / Key Methods

| Method | Description |
|--------|-------------|
| OnVisibilityChanged | 能见度变化时调用 / Called when visibility changes |
| OnConsumedFood | 消耗食物时调用 / Called when food is consumed |

## 代码示例 / Code Example

```csharp
// Get party position
PartyBase party = someParty;
CampaignVec2 position = party.Position;

// Check if mobile or settlement
if (party.IsMobile)
{
    MobileParty mobile = party.MobileParty;
    // Handle mobile party
}
else if (party.IsSettlement)
{
    Settlement settlement = party.Settlement;
    // Handle settlement
}

// Access rosters
TroopRoster members = party.MemberRoster;
ItemRoster items = party.ItemRoster;
```

## 注意事项 / Notes

- PartyBase 是一个抽象概念，代表部队的共享数据
- PartyBase is an abstract concept representing shared party data
- 使用 IsMobile 和 IsSettlement 来区分类型
- Use IsMobile and IsSettlement to distinguish types
- Settlement 和 MobileParty 共享同一个 PartyBase 实例
- Settlement and MobileParty share the same PartyBase instance
