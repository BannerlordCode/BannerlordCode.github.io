---
title: "TextProcessingContext"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TextProcessingContext`
- [← 本领域 / 返回 localization](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TextProcessingContext

**命名空间:** TaleWorlds.Localization.TextProcessor  
**模块:** TaleWorlds.Localization  
**类型:** class

本地化文本处理上下文。管理文本变量字典、自定义函数定义与调用、嵌套字段访问，?MBTextParser 文本求值引擎的核心运行时环境?
## 概述

`TextProcessingContext

` ?Bannerlord 的本地化文本系统提供变量存储和函数调用机制。`SetTextVariable

`/

`GetRawTextVariable

` 管理文本变量（大小写不敏感字典）。`GetVariableValueAsTextObject

` ?

`GetQualifiedVariableValue

` 支持点号分隔的嵌套属性访问（?

`Player.Name

`）。`CallFunction

` 执行通过 

`SetFunction

` 注册的自定义文本函数，支持参数栈和未求值参数。`GetParameterWithMarkerOccurance

`/

`GetParameterWithMarkerOccurances

` 统计文本中特定标记的出现次数，用于条件文本渲染。`FindNestedFieldValue

`/

`GetFieldValue

` 递归解析嵌套文本声明结构?
## 
## 心智模型

先把 `TextProcessingContext` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。
方法

### 变量管理

#### SetTextVariable

`

`

`csharp
internal void SetTextVariable(string variableName, TextObject data)
`

`

`

设置文本变量。使用大小写不敏感比较器?
#### GetRawTextVariable

`

`

`csharp
internal TextObject GetRawTextVariable(string variableName, TextObject parent)
`

`

`

获取变量的原始文本。优先从?TextObject 的属性中查找，其次从上下文字典查找，找不到返回空 TextObject?
#### GetVariableValueAsTextObject

`

`

`csharp
internal ValueTuple&lt;TextObject, bool&gt; GetVariableValueAsTextObject(string variableName, TextObject parent)
`

`

`

获取变量值作?TextObject。返回值元组包含文本和是否找到的标志。支持从父对象属性和嵌套字段查找。找不到时返回错误文本?
#### GetQualifiedVariableValue

`

`

`csharp
internal ValueTuple&lt;TextObject, bool&gt; GetQualifiedVariableValue(string token, TextObject parent)
`

`

`

获取限定变量值。按点号（`.

`）分隔递归解析嵌套属性，先从父对象属性查找，再从上下文字典查找?
### 函数管理

#### SetFunction / GetFunctionBody / ResetFunctions

`

`

`csharp
public void SetFunction(string functionName, MBTextModel functionBody)
public MBTextModel GetFunctionBody(string functionName)
public void ResetFunctions()
`

`

`

注册/获取/清空自定义文本函数。函数体?

`MBTextModel

`?
#### CallFunction

`

`

`csharp
internal TextObject CallFunction(string functionName, List&lt;TextExpression&gt; functionParams, TextObject parent)
`

`

`

调用自定义函数。求值参数并压入参数栈，执行函数体中所有根表达式的求值，拼接结果字符串?
#### GetFunctionParam / GetFunctionParamWithoutEvaluate

`

`

`csharp
public TextObject GetFunctionParam(string rawValue)
public TextObject GetFunctionParamWithoutEvaluate(string rawValue)
`

`

`

从参数栈中获取函数参数。`rawValue

` 格式?

`.&lt;index&gt;

`（如 

`.0

`）。`GetFunctionParam

` 返回已求值参数，

`GetFunctionParamWithoutEvaluate

` 返回原始未求值参数?
### 标记统计

#### GetParameterWithMarkerOccurance

`

`

`csharp
internal string GetParameterWithMarkerOccurance(string token, TextObject parent)
`

`

`

统计变量文本中单个标记的出现次数? ?1）。`token

` 格式?

`variableName!.MARKER

`?
#### GetParameterWithMarkerOccurances

`

`

`csharp
internal string GetParameterWithMarkerOccurances(string token, TextObject parent)
`

`

`

统计变量文本中多个标记中第一个出现的次数。`token

` 格式?

`variableName!.[MARK1,MARK2,...]

`?
### 静态工具方?
\| 方法 \| 描述 \|
\|------\|-------------\|
\| IsDeclaration(string token) \| 判断是否为声明标记（?

`@

` 开头） \|
\| IsLinkToken(string token) \| 判断是否为链接标记（

`.link

` ?

`LINK

`?\|
\| IsDeclarationFinalizer(string token) \| 判断是否为声明结束标记（

`\@

` ?

`/@

`?\|
\| ReadFirstToken(string text, ref int i) \| 从文本中读取下一?

`{...}

` 标记 \|

### ClearAll

`

`

`csharp
internal void ClearAll()
`

`

`

清空所有变量?
## 使用示例

`

`

`csharp
var context = new TextProcessingContext();

// 设置变量
context.SetTextVariable("player_name", new TextObject("Player"));

// 注册函数
context.SetFunction("greet", MBTextParser.Parse(
    MBTextManager.Tokenizer.Tokenize("Hello {.0}!")));

// 调用函数
var result = context.CallFunction("greet",
    new List&lt;TextExpression&gt; { new TextExpression("player_name") },
    parent);
// result = "Hello Player!"
`

`

`

## 参见

- [localization 类目录](../catalog-localization)
