---
title: "HotKeyManager"
description: "静态热键管理器，按类别维护所有 GameKeyContext，每帧驱动键位状态更新并处理存档与改键变化。"
---
# HotKeyManager

**命名空间：** `TaleWorlds.InputSystem`
**模块：** `TaleWorlds.InputSystem`
**类型：** `public static class`
**基类：** `object`（静态类）
**源文件：** `bannerlord-1.4.7/TaleWorlds.InputSystem/HotKeyManager.cs`（声明见第 10 行）

## 概述

`HotKeyManager` 是输入系统的「总调度中心」，它是一个静态类，内部维护一个从类别名到 `GameKeyContext` 实例的字典。它负责：

1. **注册管理**：所有按键上下文（`GameKeyContext` 的子类）在初始化时向它注册自己；
2. **每帧驱动**：通过 `Tick` 方法在每帧把所有上下文的按键状态从底层 `Input` 同步到逻辑层；
3. **改键支持**：当玩家修改键位时，通过 `OnKeybindsChanged` 事件通知所有订阅者；
4. **存档集成**：在 `Tick` 中检测存档/读档事件，确保键位状态在存档恢复后正确还原。

对 mod 开发者来说，`HotKeyManager` 是「我的自定义按键类别如何接入游戏输入系统」的入口点。

## 心智模型

把 `HotKeyManager` 想象成一个「按键登记处 + 调度台」：

- 每个 `GameKeyContext` 子类在初始化时到登记处「报到」（注册自己）；
- 登记处维护一本「类别名 → 上下文」的字典；
- 每帧，登记处把所有上下文中的按键状态从底层输入设备同步上来；
- 当玩家改键时，登记处广播 `OnKeybindsChanged` 事件，让所有相关方更新状态。

关键设计点：**静态类 + 字典查找**。因为是静态的，任何代码都可以直接访问，不需要传递引用；字典查找保证了按类别访问按键的 O(1) 性能。

## 怎么用

### 怎么拿到

源树路径：`C:/WorkSpace/Bannerlord/bannerlord-1.4.7/TaleWorlds.InputSystem/HotKeyManager.cs`

- 类声明：`HotKeyManager.cs:10` — `public static class HotKeyManager`
- `OnKeybindsChanged` 事件：`HotKeyManager.cs:15` — 键位变化时触发
- `GetHotKeyId` 方法：`HotKeyManager.cs:18/30` — 按类别获取 HotKey ID
- `GetCategory` 方法：`HotKeyManager.cs:42` — 按名称获取 `GameKeyContext`
- `GetAllCategories` 方法：`HotKeyManager.cs:48` — 获取所有已注册类别
- `Tick` 方法：`HotKeyManager.cs:54` — 每帧驱动，处理存档/键位变化

因为它是静态类，直接通过类名访问，不需要实例化。

### 典型用法

```csharp
// 1. 订阅键位变化事件
HotKeyManager.OnKeybindsChanged += () =>
{
    // 重新加载键位配置
    ReloadKeybinds();
};

// 2. 获取自定义类别的按键
GameKeyContext myCategory = HotKeyManager.GetCategory("MyMod");
GameKey action = myCategory.GetGameKey(0);

// 3. 遍历所有类别（用于调试或批量操作）
foreach (var category in HotKeyManager.GetAllCategories())
{
    Console.WriteLine(category.GameKeyCategoryId);
}
```

### 坑

- **静态类无法继承或实例化**：所有访问都是 `HotKeyManager.Method()` 形式。
- **Tick 由游戏引擎调用**：不要在自己的代码中手动调用 `Tick`，否则会导致状态重复同步。
- **OnKeybindsChanged 是事件**：订阅后记得在适当时机取消订阅，避免内存泄漏。
- **GetCategory 可能返回 null**：如果类别名不存在或尚未注册，返回值是 `null`，使用前必须检查。
- **存档恢复会重置键位**：`Tick` 中处理存档逻辑，如果在存档恢复后立即查询按键状态，可能读到旧值。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `OnKeybindsChanged` (15) | 键位变化时触发的事件，用于通知订阅者 |
| `GetHotKeyId` (18/30) | 按类别获取 HotKey ID（两个重载） |
| `GetCategory` (42) | 按名称获取对应的 `GameKeyContext` 实例 |
| `GetAllCategories` (48) | 获取所有已注册的按键类别 |
| `Tick` (54) | 每帧驱动方法，处理存档/键位变化 |

## 真实示例

```csharp
// 来自 HotKeyManager.cs 的核心方法签名
public static event Action OnKeybindsChanged;
public static int GetHotKeyId(string categoryName);
public static GameKeyContext GetCategory(string categoryName);
public static IEnumerable<GameKeyContext> GetAllCategories();
public static void Tick();
```

## 参见

- [GameKeyContext](../GameKeyContext)
- [InputContext](../InputContext)
- [../../core-extra/Game](../../core-extra/Game)

## 导航

- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
