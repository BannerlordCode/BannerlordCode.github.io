<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MethodCode`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MethodCode

**Namespace:** TaleWorlds.Library.CodeGeneration
**Module:** TaleWorlds.Library
**Type:** `public class MethodCode`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library.CodeGeneration/MethodCode.cs`

## 概述

`MethodCode` 位于 `TaleWorlds.Library.CodeGeneration`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library.CodeGeneration` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
`public void GenerateInto(CodeGenerationFile codeGenerationFile)`

**用途 / Purpose:** 处理 `generate into` 相关逻辑。

### AddLine
`public void AddLine(string line)`

**用途 / Purpose:** 向当前集合/状态中添加 `line`。

### AddLines
`public void AddLines(IEnumerable<string> lines)`

**用途 / Purpose:** 向当前集合/状态中添加 `lines`。

### AddCodeBlock
`public void AddCodeBlock(CodeBlock codeBlock)`

**用途 / Purpose:** 向当前集合/状态中添加 `code block`。

## 使用示例

```csharp
var value = new MethodCode();
value.GenerateInto(codeGenerationFile);
```

## 参见

- [完整类目录](../catalog)