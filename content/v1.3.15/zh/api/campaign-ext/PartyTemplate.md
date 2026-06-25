---
title: "PartyTemplate"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyTemplateObject / 队伍模板`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyTemplateObject / 队伍模板

## 心智模型

先把 `PartyTemplateObject` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

**Namespace**: TaleWorlds.CampaignSystem.Party  
**File**: 

`bannerlord-1.3.15/TaleWorlds.CampaignSystem/Party/PartyTemplateObject.cs

`  
**Purpose**: Defines troop composition for mobile parties

## Overview / 概述

PartyTemplateObject defines the template for a party's troop composition. It contains stacks of troops with minimum and maximum counts, allowing parties to spawn with variable troop sizes within those bounds.

PartyTemplateObject定义队伍的人员组成模板。它包含具有最小和最大数量的部队堆栈，允许队伍在这些范围内生成可变数量的部队?

## 关键属?/ Key Properties

\| Property \| Type \| Description \|
\|----------\|------\|-------------\|
\| 

`Stacks

` \| 

`MBList

` \| Troop stacks in this template \|
\| 

`ShipHulls

` \| 

`MBList

` \| Ship hulls for naval parties \|

## 关键方法 / Key Methods

\| Method \| Description \|
\|--------\|-------------\|
\| 

`GetUpperTroopLimit()

` \| Get maximum total troop count \|
\| 

`GetLowerTroopLimit()

` \| Get minimum total troop count \|

## 使用示例 / Usage Example

`

`

`csharp
// Get party template
PartyTemplateObject template = party.PartyTemplate;
if (template == null)
{
    return;
}

// Get troop limits
int maxTroops = template.GetUpperTroopLimit();
int minTroops = template.GetLowerTroopLimit();
Debug.Print("Troop range: " + minTroops + " - " + maxTroops);

// Iterate through stacks
foreach (PartyTemplateStack stack in template.Stacks)
{
    CharacterObject troop = stack.Character;
    int minCount = stack.MinValue;
    int maxCount = stack.MaxValue;
    Debug.Print(troop.Name + ": " + minCount + " - " + maxCount);
}

// Get all ship hulls
foreach (ShipTemplateStack hull in template.ShipHulls)
{
    Debug.Print("Ship hull: " + hull.Hull.Name);
}
`

`

`

## PartyTemplateStack

\| Property \| Type \| Description \|
\|----------\|------\|-------------\|
\| 

`Character

` \| 

`CharacterObject

` \| The troop type \|
\| 

`MinValue

` \| 

`int

` \| Minimum count \|
\| 

`MaxValue

` \| 

`int

` \| Maximum count \|

## ShipTemplateStack

\| Property \| Type \| Description \|
\|----------\|------\|-------------\|
\| 

`Hull

` \| 

`ShipHull

` \| The ship hull type \|
\| 

`MinValue

` \| 

`int

` \| Minimum count \|
\| 

`MaxValue

` \| 

`int

` \| Maximum count \|

## XML 定义 / XML Definition

Party templates are defined in XML:

`

`

`xml
&lt;PartyTemplate id="my_template"&gt;
    &lt;stacks&gt;
        &lt;PartyTemplateStack troop="troop_1" min_value="5" max_value="10"/&gt;
        &lt;PartyTemplateStack troop="troop_2" min_value="3" max_value="7"/&gt;
    &lt;/stacks&gt;
    &lt;ship_hulls&gt;
        &lt;ShipTemplateStack hull="hull_1" min_value="0" max_value="1"/&gt;
    &lt;/ship_hulls&gt;
&lt;/PartyTemplate&gt;
`

`

`
