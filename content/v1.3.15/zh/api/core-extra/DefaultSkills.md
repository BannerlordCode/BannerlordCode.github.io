---
title: "DefaultSkills"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultSkills`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSkills

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class DefaultSkills`
**Base:** 无
**File:** `TaleWorlds.Core/DefaultSkills.cs`

## 概述

`DefaultSkills` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `OneHanded` | `public static SkillObject OneHanded { get; }` |
| `TwoHanded` | `public static SkillObject TwoHanded { get; }` |
| `Polearm` | `public static SkillObject Polearm { get; }` |
| `Bow` | `public static SkillObject Bow { get; }` |
| `Crossbow` | `public static SkillObject Crossbow { get; }` |
| `Throwing` | `public static SkillObject Throwing { get; }` |
| `Riding` | `public static SkillObject Riding { get; }` |
| `Athletics` | `public static SkillObject Athletics { get; }` |
| `Crafting` | `public static SkillObject Crafting { get; }` |
| `Tactics` | `public static SkillObject Tactics { get; }` |
| `Scouting` | `public static SkillObject Scouting { get; }` |
| `Roguery` | `public static SkillObject Roguery { get; }` |
| `Charm` | `public static SkillObject Charm { get; }` |
| `Leadership` | `public static SkillObject Leadership { get; }` |
| `Trade` | `public static SkillObject Trade { get; }` |
| `Steward` | `public static SkillObject Steward { get; }` |
| `Medicine` | `public static SkillObject Medicine { get; }` |
| `Engineering` | `public static SkillObject Engineering { get; }` |

## 使用示例

```csharp
var value = new DefaultSkills();
```

## 参见

- [完整类目录](../catalog)