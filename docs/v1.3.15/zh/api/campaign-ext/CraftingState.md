<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CraftingState`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingState

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CraftingState : GameState`
**Base:** `GameState`
**File:** `TaleWorlds.CampaignSystem/GameState/CraftingState.cs`

## 概述

`CraftingState` 位于 `TaleWorlds.CampaignSystem.GameState`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.GameState` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsMenuState` | `public override bool IsMenuState { get; }` |
| `CraftingLogic` | `public Crafting CraftingLogic { get; }` |
| `Handler` | `public ICraftingStateHandler Handler { get; set; }` |

## 主要方法

### InitializeLogic
`public void InitializeLogic(Crafting newCraftingLogic, bool isReplacingWeaponClass = false)`

**用途 / Purpose:** 初始化 `logic` 的状态、资源或绑定。

## 使用示例

```csharp
var value = new CraftingState();
value.InitializeLogic(newCraftingLogic, false);
```

## 参见

- [完整类目录](../catalog)