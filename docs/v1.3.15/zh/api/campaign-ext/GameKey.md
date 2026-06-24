<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameKey`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameKey

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public class GameKey`
**Base:** 无
**File:** `TaleWorlds.InputSystem/GameKey.cs`

## 概述

`GameKey` 位于 `TaleWorlds.InputSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.InputSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public int Id { get; }` |
| `StringId` | `public string StringId { get; }` |
| `GroupId` | `public string GroupId { get; }` |
| `MainCategoryId` | `public string MainCategoryId { get; }` |
| `KeyboardKey` | `public Key KeyboardKey { get; }` |
| `DefaultKeyboardKey` | `public Key DefaultKeyboardKey { get; }` |
| `ControllerKey` | `public Key ControllerKey { get; set; }` |
| `DefaultControllerKey` | `public Key DefaultControllerKey { get; set; }` |

## 主要方法

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

## 使用示例

```csharp
var value = new GameKey();
value.ToString();
```

## 参见

- [完整类目录](../catalog)