<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MethodCode`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MethodCode

**Namespace:** TaleWorlds.Library.CodeGeneration
**Module:** TaleWorlds.Library
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `MethodCode` is a class in the `TaleWorlds.Library.CodeGeneration` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Comment` | `public string Comment { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `MethodSignature` | `public string MethodSignature { get; set; }` |
| `ReturnParameter` | `public string ReturnParameter { get; set; }` |
| `IsStatic` | `public bool IsStatic { get; set; }` |
| `AccessModifier` | `public MethodCodeAccessModifier AccessModifier { get; set; }` |
| `PolymorphismInfo` | `public MethodCodePolymorphismInfo PolymorphismInfo { get; set; }` |


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)