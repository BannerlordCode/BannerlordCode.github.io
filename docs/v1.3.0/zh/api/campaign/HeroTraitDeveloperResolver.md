<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HeroTraitDeveloperResolver`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# HeroTraitDeveloperResolver

**Namespace:** TaleWorlds.CampaignSystem.SaveCompability
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeroTraitDeveloperResolver : IConflictResolver`
**Base:** `IConflictResolver`
**File:** `TaleWorlds.CampaignSystem/SaveCompability/HeroTraitDeveloperResolver.cs`

## 概述

`HeroTraitDeveloperResolver` 位于 `TaleWorlds.CampaignSystem.SaveCompability`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.SaveCompability` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### IsApplicable
`public bool IsApplicable(ApplicationVersion version)`

**用途 / Purpose:** 处理 `is applicable` 相关逻辑。

### GetFieldMemberWithId
`public MemberTypeId GetFieldMemberWithId(MemberTypeId memberTypeId)`

**用途 / Purpose:** 获取 `field member with id` 的当前值。

### GetNewType
`public Type GetNewType()`

**用途 / Purpose:** 获取 `new type` 的当前值。

### GetPropertyMemberWithId
`public MemberTypeId GetPropertyMemberWithId(MemberTypeId memberTypeId)`

**用途 / Purpose:** 获取 `property member with id` 的当前值。

## 使用示例

```csharp
var value = new HeroTraitDeveloperResolver();
value.IsApplicable(version);
```

## 参见

- [完整类目录](../catalog)