<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HotKeyManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HotKeyManager

**命名空间:** TaleWorlds.InputSystem
**模块:** TaleWorlds.InputSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`HotKeyManager` 是 `TaleWorlds.InputSystem` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

### GetHotKeyId

```csharp
public static string GetHotKeyId(string categoryName, string hotKeyId)
```

### GetHotKeyId

```csharp
public static string GetHotKeyId(string categoryName, int hotKeyId)
```

### GetCategory

```csharp
public static GameKeyContext GetCategory(string categoryName)
```

### GetAllCategories

```csharp
public static Dictionary<string, GameKeyContext>.ValueCollection GetAllCategories()
```

### Tick

```csharp
public static void Tick(float dt)
```

### Initialize

```csharp
public static void Initialize(PlatformFilePath savePath, bool isRDownSwappedWithRRight)
```

### RegisterInitialContexts

```csharp
public static void RegisterInitialContexts(IEnumerable<GameKeyContext> contexts, bool loadKeys)
```

### RegisterContext

```csharp
public static void RegisterContext(GameKeyContext context, bool ignoreSerialize = false, bool loadKeys = false)
```

### ShouldNotifyDocumentVersionDifferent

```csharp
public static bool ShouldNotifyDocumentVersionDifferent()
```

### Reset

```csharp
public static void Reset()
```

### LoadAsync

```csharp
public static void LoadAsync()
```

### SaveAsync

```csharp
public static void SaveAsync(bool throwEvent)
```

### OnKeybindsChangedEvent

```csharp
public delegate void OnKeybindsChangedEvent()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)