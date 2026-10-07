---
title: "FieldExpression"
description: "{@NAME}…{\\@} 字段块的运行时形态：EvaluateString 恒返回空串，它的全部作用是被 VariableExpression 扫描出来当取值槽。"
---

# FieldExpression

**Namespace:** `TaleWorlds.Localization.Expressions`
**Module:** `TaleWorlds.Localization`
**Type:** `internal class FieldExpression : TextExpression`
**Base:** `TextExpression`
**File:** `Bannerlord.Source/bin/TaleWorlds.Localization/TaleWorlds.Localization.Expressions/FieldExpression.cs`

## 概述

`FieldExpression` 是 34 行、6 个成员、**求值为空**的字段槽节点。语法形态是 `{@字段名}内容{\@}`——`Tokenizer.cs:18` 的 `FieldStarter` 是 `{@`，`:19` 的 `FieldFinalizer` 是 `{\@}`。唯一构造点是 `MBTextParser.cs:259`，在 `CheckFieldStatement` 里。

它的 `EvaluateString`（`FieldExpression.cs:29-32`）**无条件 `return "";`**。**所以它渲染出来什么也不产出**——它的存在意义完全在别处：`[VariableExpression](../VariableExpression/)` 的 `GetValue`（`VariableExpression.cs:32-42`）在展开嵌套变量时，会遍历父变量的 `MultiStatement.SubStatements`，**专门寻找 `FieldExpression` 并按 `FieldName` 匹配**，命中就把 `InnerExpression` 包成 `MultiStatement` 返回。**这就是 `{@NAME}` 里的 `NAME` 能取到值、而这个字段块本身不出现在输出里的原因。**

## 心智模型

把它当成**「变量表里的一行」**。三条推论：

第一，**它是「声明」而不是「求值」。** 对照 [SimpleText](../SimpleText/)（渲染正文）、[LangaugeMarkerExpression](../LangaugeMarkerExpression/)（渲染标记待下游处理）——本节点渲染空串，**内容被 `InnerExpression` 持有，等人来取。**

第二，**匹配靠 `FieldName`，而 `FieldName` 就是 `RawValue`。** `:11` 的 `public string FieldName => base.RawValue;`。而 `CheckFieldStatement`（`MBTextParser.cs:250-252`）传进来的 `lookAheadFirst` 是那个 `Identifier` token，**它的 `RawValue` 就是纯字段名**（`Tokenizer.cs:48` 的 `Identifier` 规则不含花括号）。

第三，**两个构造器的差别只在有没有 `part2`。** `:17-21` 的单参构造只留 `_innerExpression` 并把它的 `RawValue` 拷进 `base.RawValue`；`:23-27` 的双参构造 `: this(innerExpression)` 再补 `part2`。**解析器只走双参那个**（`MBTextParser.cs:259`），单参那个是给手写/子类用的。

边界：**`internal`，无 `InternalsVisibleTo`**；它**在** `MBTextParser.cs:126` 的根节点白名单里（`FieldExpression` 是 8 类之一），**不需要花括号壳**。

## 如何使用

**怎么拿到它**：`Tokenizer.cs:18-19` 切出 `{@` 与 `{\@}`，`MBTextParser.cs:169` 的规则链末位 `CheckFieldStatement`（`:233`）在 `:259` 构造。**注意 `:247` 有硬约束：字段名必须是 `TokenType.Identifier`**，否则 `Debug.FailedAssert` 后 `return false`。

链式取值——`{@A}{@B}` 里 B 可以引用 A 的字段：

```csharp
using TaleWorlds.Core;
using TaleWorlds.Localization;

// {@HERO}{@NAME} 的内容里再用 {NAME}，靠 VariableExpression.GetValue 逐级展开
TextObject line = new TextObject("{=my_field}{@HERO}{@NAME} of {@TITLE}, age {@AGE}{\\@}");
line.SetCharacterProperties("HERO", Hero.MainHero.CharacterObject, includeDetails: true);
Debug.Print(line.ToString(), 0);
```

**用它最容易踩的一条**：**`SetCharacterProperties` 默认 `includeDetails: false`，`{@AGE}` 取不到值。** `StringHelpers.GetCharacterProperties`（`StringHelpers.cs:54`）无条件绑 `NAME`/`GENDER`/`LINK`（`:57-59`），`FIRSTNAME` 只在 `character.IsHero` 时绑（`:62`），而 `AGE`/`FACTION`/`CLAN` **只在 `:70` 的 `if (includeDetails)` 里绑**。**不显式传 `true`，`{@AGE}` 展开成空串——整段文字凭空少一块，没有异常。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `_innerExpression` | `private TextExpression _innerExpression` | 字段**名**所在的节点（`:7` 声明；`MBTextParser.cs:250` 传的是那个 `Identifier`）。`:20` 把它的 `RawValue` 拷进 `base.RawValue`，所以 `FieldName` 就是它的原文。**`EvaluateString` 不用它。** |
| `part2` | `private TextExpression part2` | 字段的**内容**（`:9` 声明）。**命名不规范（不是 `_` 前缀），是引擎原样。** 由 `:23-26` 的双参构造赋值，**双参才会写它；单参构造下它是 null** ——而 `InnerExpression` 属性会返回 null。 |
| `FieldName` | `public string FieldName => base.RawValue` | **本类型对外的唯一语义出口，声明在 `:11`。** `VariableExpression.cs:34` 的 `fieldExpression.FieldName == _identifierName` 是唯一的消费点——**字段匹配靠它，不是靠 `_innerExpression`。** |
| `InnerExpression` | `public TextExpression InnerExpression => part2` | 字段内容，声明在 `:13`。`VariableExpression.cs:36-40` 用它：若它本身是 `MultiStatement` 就直接返回，否则 `new MultiStatement(new TextExpression[1] { part2 })` 包一层。**返回 null（单参构造）时会在 `:40` 抛 `NullReferenceException`。** |
| `TokenType` | `internal override TokenType TokenType => TokenType.FieldExpression` | 固定值，声明在 `:15`。**`MBTextParser.cs:126` 的 `IsRootExpression` 认它**，所以字段块可独立成根。 |
| `FieldExpression(TextExpression)` | `public FieldExpression(TextExpression innerExpression)` | 单参构造（`:17-21`）：存名、拷 `RawValue`。**不写 `part2`。** 解析器不用它。 |
| `FieldExpression(TextExpression, TextExpression)` | `public FieldExpression(TextExpression innerExpression, TextExpression part2) : this(innerExpression)` | 双参构造（`:23-27`，`part2` 在 `:26` 赋值）。**全树唯一调用点 `MBTextParser.cs:259`。** 字段名为 null 会在 `:20` 抛。 |
| `EvaluateString` | `internal override string EvaluateString(TextProcessingContext context, TextObject parent)` | **恒返回 `""`（`:27`）。** 两个形参都收下不用，`_innerExpression` 与 `part2` 一个都不碰。**这就是字段块不出现在输出里的原因**——`TextGrammarProcessor.cs:16` 拼了个空串。 |

## 真实示例

字段块渲染为空、内容靠别人来取——用两条路径对照：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.Localization;

// A) 字段内容本身就是普通文字 -> 整块渲染为空
TextObject plainField = new TextObject("{=my_f1}{@ANY}{@this content disappears}{\\@}");
Debug.Print("A = '" + plainField.ToString() + "'", 0);

// B) 字段名对上已绑定的变量 -> 内容通过嵌套变量展开出现
TextObject namedField = new TextObject("{=my_f2}{@HERO}{@NAME}{\\@}");
namedField.SetCharacterProperties("HERO", Hero.MainHero.CharacterObject);
Debug.Print("B = '" + namedField.ToString() + "'", 0);
```

`includeDetails` 决定 `AGE` 有没有——这是本类最常踩的坑：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.Localization;

TextObject age = new TextObject("{=my_age}{@HERO}{@AGE}{\\@}");

age.SetCharacterProperties("HERO", Hero.MainHero.CharacterObject);   // includeDetails 默认 false
Debug.Print("default  = '" + age.ToString() + "'", 0);

age.SetCharacterProperties("HERO", Hero.MainHero.CharacterObject, includeDetails: true);
Debug.Print("withDetails = '" + age.ToString() + "'", 0);
```

## 风险与边界

- **`internal`，编译期不可引用。**
- **`EvaluateString` 恒空。** `:31`。**字段块本身永远不产出文字**——若你期望 `{@X}` 直接显示内容，那是理解错了：内容要靠变量名对上别人的字段才会被 [VariableExpression](../VariableExpression/) 取出来。
- **字段名必须是 `Identifier`。** `MBTextParser.cs:245-249` 判定失败时 `Debug.FailedAssert` 后 `return false`，**发布版静默**。`{@1A}`、`{@-x}` 都切不出 `Identifier`。
- **单参构造会让 `InnerExpression` 为 null。** `VariableExpression.cs:40` 会 `new MultiStatement(new TextExpression[1] { null })`，随后求值时 `TextGrammarProcessor.cs:21` 走 `ThrowLocalizationError`。**解析器不会这么用，手写 `new` 会。**
- **`AGE`/`FACTION`/`CLAN` 需要 `includeDetails: true`。** `StringHelpers.cs:70`。**默认参数是 false。**
- **`FIRSTNAME` 需要 `character.IsHero`。** `StringHelpers.cs:60-68`。
- **`{@` 与 `{\@}` 是一对。** `Tokenizer.cs:18-19`。写错终止符会在 `CheckFieldStatement` 之后留下无法识别的 token。

## 参见

- 唯一的语义消费者：[VariableExpression](../VariableExpression/)（`GetValue` 第 23-45 行，`:34` 按 `FieldName` 匹配、`:36-40` 取 `InnerExpression`）
- 字段绑定的数据来源：`StringHelpers.GetCharacterProperties`（`bannerlord-1.4.5/.../Helpers/StringHelpers.cs:54`）与 `TextObjectExtensions.SetCharacterProperties`（`.../TaleWorlds.CampaignSystem.Extensions/TextObjectExtensions.cs:9`）
- 构造点：[MBTextParser](../MBTextParser/)（`:233` `CheckFieldStatement`、`:245` 字段名合法性、`:259` 构造、`:169` 规则链）、[Tokenizer](../Tokenizer/)（`:18-19` 字段起止符）
- 契约与兄弟：[TextExpression](../TextExpression/)、[MultiStatement](../MultiStatement/)（`VariableExpression` 匹配时的返回类型）、[SimpleText](../SimpleText/)
- 求值环境：[TextProcessingContext](../TextProcessingContext/)、[TextGrammarProcessor](../TextGrammarProcessor/)、[TextObject](../TextObject/)
- 桶首页：[localization API 分区](../)