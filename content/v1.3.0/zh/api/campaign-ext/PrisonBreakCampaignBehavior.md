---
title: "PrisonBreakCampaignBehavior"
description: "PrisonBreakCampaignBehavior 的自动生成类参考。"
---
# PrisonBreakCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox.CampaignBehaviors
**Type:** `public class PrisonBreakCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `SandBox/CampaignBehaviors/PrisonBreakCampaignBehavior.cs`

## 概述

`PrisonBreakCampaignBehavior` 位于 `SandBox.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 将「events」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 PrisonBreakCampaignBehavior 实例
PrisonBreakCampaignBehavior prisonBreakCampaignBehavior = ...;
prisonBreakCampaignBehavior.RegisterEvents();
```

### CreatePrisonBreakGuard
`public LocationCharacter CreatePrisonBreakGuard()`

**用途 / Purpose:** 构建一个新的 「prison break guard」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 PrisonBreakCampaignBehavior 实例
PrisonBreakCampaignBehavior prisonBreakCampaignBehavior = ...;
var result = prisonBreakCampaignBehavior.CreatePrisonBreakGuard();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 将「data」同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 PrisonBreakCampaignBehavior 实例
PrisonBreakCampaignBehavior prisonBreakCampaignBehavior = ...;
prisonBreakCampaignBehavior.SyncData(dataStore);
```

### game_menu_prison_menu_on_init
`public static void game_menu_prison_menu_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理与 「game_menu_prison_menu_on_init」 相关的逻辑。

```csharp
// 静态调用，不需要实例
PrisonBreakCampaignBehavior.game_menu_prison_menu_on_init(args);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PrisonBreakCampaignBehavior prisonBreakCampaignBehavior = ...;
prisonBreakCampaignBehavior.RegisterEvents();
```

## 参见

- [本区域目录](../)