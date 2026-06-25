---
title: "InitializationArgs"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InitializationArgs`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# InitializationArgs

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class InitializationArgs`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/LordPartyComponent.cs`

## 概述

`InitializationArgs` 位于 `TaleWorlds.CampaignSystem.Party.PartyComponents`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Party.PartyComponents` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### InitializeLordPartyProperties
`public void InitializeLordPartyProperties(MobileParty mobileParty, Hero owner)`

**用途 / Purpose:** 初始化 `lord party properties` 的状态、资源或绑定。

## 使用示例

```csharp
var value = new InitializationArgs();
value.InitializeLordPartyProperties(mobileParty, owner);
```

## 参见

- [完整类目录](../catalog)