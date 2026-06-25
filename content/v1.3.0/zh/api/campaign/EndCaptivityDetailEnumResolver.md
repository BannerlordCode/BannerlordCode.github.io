---
title: "EndCaptivityDetailEnumResolver"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EndCaptivityDetailEnumResolver`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# EndCaptivityDetailEnumResolver

**Namespace:** TaleWorlds.CampaignSystem.SaveCompability
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EndCaptivityDetailEnumResolver : IEnumResolver`
**Base:** `IEnumResolver`
**File:** `TaleWorlds.CampaignSystem/SaveCompability/EndCaptivityDetailEnumResolver.cs`

## 概述

`EndCaptivityDetailEnumResolver` 位于 `TaleWorlds.CampaignSystem.SaveCompability`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.SaveCompability` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### ResolveObject
`public string ResolveObject(string originalObject)`

**用途 / Purpose:** 处理 `resolve object` 相关逻辑。

## 使用示例

```csharp
EndCaptivityDetailEnumResolver example = EndCaptivityDetailEnumResolver.Value;
```

## 参见

- [完整类目录](../catalog)