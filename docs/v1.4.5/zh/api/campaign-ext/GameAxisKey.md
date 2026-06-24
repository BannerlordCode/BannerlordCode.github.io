<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameAxisKey`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GameAxisKey

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public class GameAxisKey`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.InputSystem/TaleWorlds.InputSystem/GameAxisKey.cs`

## 概述

`GameAxisKey` 位于 `TaleWorlds.InputSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.InputSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; }` |
| `AxisKey` | `public Key AxisKey { get; }` |
| `DefaultAxisKey` | `public Key DefaultAxisKey { get; }` |
| `PositiveKey` | `public GameKey PositiveKey { get; }` |
| `NegativeKey` | `public GameKey NegativeKey { get; }` |
| `Type` | `public AxisType Type { get; }` |

## 主要方法

### GetAxisState
`public float GetAxisState(bool isKeysAllowed, bool isMouseButtonAllowed, bool isMouseWheelAllowed, bool isControllerAllowed)`

**用途 / Purpose:** 获取 `axis state` 的当前值。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

## 使用示例

```csharp
var value = new GameAxisKey();
value.GetAxisState(false, false, false, false);
```

## 参见

- [完整类目录](../catalog)