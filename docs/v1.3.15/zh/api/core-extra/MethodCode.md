<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MethodCode`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MethodCode

**命名空间:** TaleWorlds.Library.CodeGeneration
**模块:** TaleWorlds.Library
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`MethodCode` 是 `TaleWorlds.Library.CodeGeneration` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Comment` | `public string Comment { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `MethodSignature` | `public string MethodSignature { get; set; }` |
| `ReturnParameter` | `public string ReturnParameter { get; set; }` |
| `IsStatic` | `public bool IsStatic { get; set; }` |
| `AccessModifier` | `public MethodCodeAccessModifier AccessModifier { get; set; }` |
| `PolymorphismInfo` | `public MethodCodePolymorphismInfo PolymorphismInfo { get; set; }` |


## 主要方法

### GenerateInto

```csharp
public void GenerateInto(CodeGenerationFile codeGenerationFile)
```

### AddLine

```csharp
public void AddLine(string line)
```

### AddLines

```csharp
public void AddLines(IEnumerable<string> lines)
```

### AddCodeBlock

```csharp
public void AddCodeBlock(CodeBlock codeBlock)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)