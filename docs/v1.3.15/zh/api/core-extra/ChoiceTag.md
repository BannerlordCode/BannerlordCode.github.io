<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ChoiceTag`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ChoiceTag

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** 结构体 struct struct
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`ChoiceTag` 是 `TaleWorlds.Core` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要属性

| Name | Signature |
|------|-----------|
| `TagName` | `public string TagName { get; }` |
| `Weight` | `public uint Weight { get; }` |
| `IsTagReversed` | `public bool IsTagReversed { get; }` |


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

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)