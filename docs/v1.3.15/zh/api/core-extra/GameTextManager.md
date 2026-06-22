<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameTextManager`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameTextManager

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class GameTextManager`
**Base:** 无
**File:** `TaleWorlds.Core/GameTextManager.cs`

## 概述

`GameTextManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要方法

### GetGameText
```csharp
public GameText GetGameText(string id)
```

### AddGameText
```csharp
public GameText AddGameText(string id)
```

### TryGetText
```csharp
public bool TryGetText(string id, string variation, out TextObject text)
```

### FindText
```csharp
public TextObject FindText(string id, string variation = null)
```

### FindAllTextVariations
```csharp
public IEnumerable<TextObject> FindAllTextVariations(string id)
```

### LoadGameTexts
```csharp
public void LoadGameTexts()
```

### LoadDefaultTexts
```csharp
public void LoadDefaultTexts()
```

## 使用示例

```csharp
// GameTextManager (Manager) 的典型用法
GameTextManager.Current;
```

## 参见

- [完整类目录](../catalog)