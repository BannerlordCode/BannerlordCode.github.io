---
title: "SandBoxViewCheats"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SandBoxViewCheats`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SandBoxViewCheats

**命名空间:** SandBox.View
**模块:** SandBox.View
**类型:** `public static class SandBoxViewCheats`
**领域:** campaign-ext

## 概述

`SandBoxViewCheats` 位于 `SandBox.View`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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
// 先准备该类型需要的上下文，然后直接调用静态入口
SandBoxViewCheats.KillHero(strings);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
