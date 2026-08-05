---
title: "InventoryMode"
description: "v1.4.5 中由 InventoryState 保存、用于普通库存、交易、战利品、储藏和仓库界面的模式契约。"
---
# InventoryMode

**Namespace:** `Helpers`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public enum InventoryMode`  
**Owner:** [InventoryScreenHelper](../InventoryScreenHelper)  
**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/InventoryScreenHelper.cs`

## 职责

`InventoryMode` 标记 [InventoryScreenHelper](../InventoryScreenHelper) 写入 [InventoryState](../../campaign/InventoryState) 的库存展示类型。它是由 [InventoryLogic](../../campaign/InventoryLogic) 消费的临时 UI 契约，不是存档 ID，也不是物品类别。

## 心智模型

辅助类会在初始化逻辑并压入状态前选择模式：

```
InventoryScreenHelper 入口 -> InventoryState.InventoryMode -> InventoryLogic 展示规则
```

`Default` 覆盖普通库存和转移界面；`Trade`、`Loot`、`Stash`、`Warehouse` 分别选择交易、战利品、储藏和仓库相关的 roster、监听器与容量行为。

## 枚举值

| 值 | v1.4.5 中的含义 |
| --- | --- |
| `Default` | 普通库存、party 库存、接收物品或锻造分解界面。 |
| `Trade` | 与定居点、商队或 alley party 交易。 |
| `Loot` | 通过库存界面从战利品物品栏取得物品。 |
| `Stash` | 在主 party 与储藏物品栏之间移动物品。 |
| `Warehouse` | 使用仓库容量契约移动物品。 |

## 真实使用

库存界面活动时，可以从活动战役状态读取模式：

```csharp
Game game = Game.Current;
InventoryState state = InventoryScreenHelper.GetActiveInventoryState();
bool isTrade = state != null
    && state.InventoryMode == InventoryScreenHelper.InventoryMode.Trade;
```

通常由 `OpenScreenAsTrade`、`OpenScreenAsLoot`、`OpenScreenAsStash` 或 `OpenScreenAsWarehouse` 负责赋值。mod 不应当绕过辅助类，手工压入与逻辑无关的状态和模式。

## 依赖关系

- [InventoryScreenHelper](../InventoryScreenHelper) 负责赋值。
- [InventoryState](../../campaign/InventoryState) 保存活动模式。
- [InventoryLogic](../../campaign/InventoryLogic) 在初始化和转移处理中消费模式。
- [GameStateManager](../../core-extra/GameStateManager) 负责使该状态进入活动栈。

## 风险与版本边界

`InventoryMode` 不是权限检查。`Trade` 本身不会创建 merchant listener，`Loot` 本身也不会提供战利品物品栏；这些契约来自实际初始化它的辅助入口。本文中的名称和值按 v1.4.5 记录，不应作为跨版本数字存档 schema。

## 导航

- [↑ API system 索引](../)
- [所有者：InventoryScreenHelper](../InventoryScreenHelper)
- [相关：InventoryState](../../campaign/InventoryState)
- [English page](../../../../en/api/system/InventoryMode)
