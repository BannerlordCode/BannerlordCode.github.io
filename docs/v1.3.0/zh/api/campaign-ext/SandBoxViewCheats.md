<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SandBoxViewCheats`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SandBoxViewCheats

**Namespace:** SandBox.View
**Module:** SandBox.View
**Type:** `public static class SandBoxViewCheats`
**Base:** 无
**File:** `SandBox.View/SandBoxViewCheats.cs`

## 概述

`SandBoxViewCheats` 位于 `SandBox.View`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.View` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### KillHero
`public static string KillHero(List<string> strings)`

**用途 / Purpose:** 处理 `kill hero` 相关逻辑。

### FocusTournament
`public static string FocusTournament(List<string> strings)`

**用途 / Purpose:** 处理 `focus tournament` 相关逻辑。

### MakeClanMercenaryOfKingdom
`public static string MakeClanMercenaryOfKingdom(List<string> strings)`

**用途 / Purpose:** 处理 `make clan mercenary of kingdom` 相关逻辑。

### FocusHostileArmy
`public static string FocusHostileArmy(List<string> strings)`

**用途 / Purpose:** 处理 `focus hostile army` 相关逻辑。

### FocusMobileParty
`public static string FocusMobileParty(List<string> strings)`

**用途 / Purpose:** 处理 `focus mobile party` 相关逻辑。

### FocusHero
`public static string FocusHero(List<string> strings)`

**用途 / Purpose:** 处理 `focus hero` 相关逻辑。

### FocusInfestedHideout
`public static string FocusInfestedHideout(List<string> strings)`

**用途 / Purpose:** 处理 `focus infested hideout` 相关逻辑。

### FocusIssues
`public static string FocusIssues(List<string> strings)`

**用途 / Purpose:** 处理 `focus issues` 相关逻辑。

## 使用示例

```csharp
SandBoxViewCheats.KillHero(strings);
```

## 参见

- [完整类目录](../catalog)