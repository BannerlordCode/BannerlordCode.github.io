<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameKeyContext`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GameKeyContext

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public abstract class GameKeyContext`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.InputSystem/TaleWorlds.InputSystem/GameKeyContext.cs`

## 概述

`GameKeyContext` 位于 `TaleWorlds.InputSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.InputSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `GameKeyCategoryId` | `public string GameKeyCategoryId { get; }` |
| `Type` | `public GameKeyContextType Type { get; }` |

## 主要方法

### GetHotKey
`public HotKey GetHotKey(string hotKeyId)`

**用途 / Purpose:** 获取 `hot key` 的当前值。

### GetGameKey
`public GameKey GetGameKey(int gameKeyId)`

**用途 / Purpose:** 获取 `game key` 的当前值。

### GetHotKeyId
`public string GetHotKeyId(string hotKeyId)`

**用途 / Purpose:** 获取 `hot key id` 的当前值。

### GetHotKeyId
`public string GetHotKeyId(int gameKeyId)`

**用途 / Purpose:** 获取 `hot key id` 的当前值。

## 使用示例

```csharp
var implementation = new CustomGameKeyContext();
```

## 参见

- [完整类目录](../catalog)