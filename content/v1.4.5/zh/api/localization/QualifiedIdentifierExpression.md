---
title: "QualifiedIdentifierExpression"
description: "{HERO.NAME} 这类带点的标识符：唯一会去 TextProcessingContext 里逐段解引用取值的叶子，且它的 RawValue 是 null。"
---

# QualifiedIdentifierExpression

**Namespace:** `TaleWorlds.Localization.Expressions`
**Module:** `TaleWorlds.Localization`
**Type:** `internal class QualifiedIdentifierExpression : TextExpression`
**Base:** `TextExpression`
**File:** `Bannerlord.Source/bin/TaleWorlds.Localization/TaleWorlds.Localization.Expressions/QualifiedIdentifierExpression.cs`

## 概述

`QualifiedIdentifierExpression` 是 23 行、4 个成员的限定名叶子，**负责 `{HERO.NAME}`、`{HERO.GENDER}` 这种带点的标识符**。分词由 `Tokenizer.cs:46` 的 `TokenDefinition(TokenType.QualifiedIdentifier, "[a-zA-Z_][a-zA-Z\\d_]*\\.[a-zA-Z_][a-zA-Z\\d_]*", 1)` 完成——**注意这是一条正则同时匹配两段，中间必须恰好一个点**；`MBTextParser.cs:46` 把它转成本类。

它的 `EvaluateString`（`QualifiedIdentifierExpression.cs:20`）是本类唯一有实质逻辑的地方：`context.GetQualifiedVariableValue(_identifierName, parent).value.ToStringWithoutClear()`。引擎里的真实用法见 `FactionHelper.cs:634`：`{=jGIw0Xku}{HERO.NAME} has just escaped from {?HERO.GENDER}her{?}his{\?} captors`——`HERO` 由 `SetCharacterProperties` 绑上一个 `BasicCharacterObject`，`NAME` 与 `GENDER` 都是它的字段。

## 心智模型

把它当成**「点号路径求值器」**。三条推论：

第一，**它的构造器不写 `RawValue`。** `QualifiedIdentifierExpression.cs:13` 的构造器只有第 15 行 `_identifierName = identifierName;`，**没有碰 `base.RawValue`**——**这是全树少数几个不给 `base.RawValue` 赋值的表达式类**。后果很具体：`TextExpression.EvaluateAsNumber` 第 25-31 行的兜底（`RawValue == null` → 给 0）会让**限定名节点的「非零判真」永远为假**。限定名不能直接当条件用，必须先比一个数字（`{HERO.AGE > 18}`）。

第二，**它是唯一会一路点到底的取值路径。** `TextProcessingContext.GetQualifiedVariableValue`（`TextProcessingContext.cs:189`）第 191-194 行先找第一个点，没有点就退回普通变量查询；有点则取点左边那段先求值，再对点右边递归（第 200 行），并且第 201 行要求左半边的结果 `!IsEmpty()`。**所以 `{A.B.C}` 是逐段解引用，不是字符串切分。**

第三，**返回的是拍平后的字符串。** 第 20 行末尾的 `.ToStringWithoutClear()`（`TextObject.cs:212`）会把取到的 `TextObject` 直接渲染成当前语言的字符串。**`TextObject` 实例本身在这一层就没了**——想要字段对应的对象，只能改用 `SetCharacterProperties` 之外的路径自己取。

边界：**`internal`，无 `InternalsVisibleTo`**，编译期不可引用。

## 如何使用

**怎么拿到它**：`Tokenizer.cs:46` 匹配 `A.B` 形态 → `MBTextParser.cs:46` 的 switch 分支 → `new QualifiedIdentifierExpression(strValue)`。**全树唯一构造点。** 上游先经过花括号壳：`{HERO.NAME}` 的 `{` 触发 `CheckSimpleStatement`，`IsArithmeticExpression`（`MBTextParser.cs:491`）认 `TokenType.QualifiedIdentifier`，于是被包成 [SimpleExpression](../SimpleExpression/)。

复现引擎原句（`bannerlord-1.4.5/.../Helpers/FactionHelper.cs:634`）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.Localization;

// 引擎原句："{=jGIw0Xku}{HERO.NAME} has just escaped from {?HERO.GENDER}her{?}his{\?} captors and is currently recovering."
// SetCharacterProperties 是 TaleWorlds.CampaignSystem.TextObjectExtensions 的扩展方法，
// 默认 includeDetails: false，只绑 NAME / GENDER / LINK（StringHelpers.cs:57-59）
TextObject line = new TextObject("{=my_mod_escape}{HERO.NAME} has just escaped from {?HERO.GENDER}her{?}his{\\?} captors.");
line.SetCharacterProperties("HERO", Hero.MainHero.CharacterObject);
Debug.Print(line.ToString(), 0);
```

**用它最容易踩的一条**：**`RawValue` 是 null，所以限定名直接当条件永远为假。** 写成 `{?HERO.NAME}有{?}没有{\?}` 不会得到「名字非空」的效果——`ConditionExpression.cs:37` 调 `EvaluateAsNumber`，第 25 行 `exp.RawValue == null` 直接返回 0。**想按名字判真，只能把限定名和空串比较**：`{?HERO.NAME != }…` 这类写法又会被 tokenizer 的 `!=` 规则与后续 token 卡住，实际可行的只有**先比较一个数字字段**（如 `{?HERO.AGE > 18}`）。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `_identifierName` | `private readonly string _identifierName` | 整段限定名原文，如 `HERO.NAME`。**`readonly` + 不写 `base.RawValue`** 是本类最重要的两个实现细节。 |
| `IdentifierName` | `public string IdentifierName => _identifierName` | 唯一对外可读的属性，返回整段原文。**全树没有消费点**（grep 只命中声明与构造器），是为将来反射/调试预留的。**不能当 `RawValue` 用——`RawValue` 是 null。** |
| `TokenType` | `internal override TokenType TokenType => TokenType.QualifiedIdentifier` | 固定 `TokenType.QualifiedIdentifier`。**关键消费点：`MBTextParser.cs:491` 的 `IsArithmeticExpression` 认它**，所以 `{HERO.NAME}` 才会被花括号壳包成 `SimpleExpression` 而不是被当成普通文本。 |
| `QualifiedIdentifierExpression(string)` | `public QualifiedIdentifierExpression(string identifierName)` | 唯一构造器，**第 11 行只赋 `_identifierName`，刻意不碰 `base.RawValue`**。**全树唯一调用点 `MBTextParser.cs:46`。** |
| `EvaluateString` | `internal override string EvaluateString(TextProcessingContext context, TextObject parent)` | **本类唯一有逻辑的成员。** `context.GetQualifiedVariableValue(_identifierName, parent).value.ToStringWithoutClear()`——取值、拍平成字符串。**两个后果：左半段必须能独立解引用（`TextProcessingContext.cs:201` 要求它 `!IsEmpty()`），以及返回的 `TextObject` 实例在这一层丢失。** |

## 真实示例

对照「限定名」与「普通变量」，看解引用路径的差别：

```csharp
using TaleWorlds.Core;
using TaleWorlds.Localization;

TextObject qualified = new TextObject("{=my_q}{HERO.NAME}");
qualified.SetCharacterProperties("HERO", Hero.MainHero.CharacterObject);

TextObject plain = new TextObject("{=my_p}{LORD}");
plain.SetTextVariable("LORD", Hero.MainHero.Name);

Debug.Print("qualified = " + qualified.ToString(), 0);
Debug.Print("plain     = " + plain.ToString(), 0);
```

不绑定 `HERO` 就渲染——`GetQualifiedVariableValue` 返回空对象，第 20 行对空值调 `ToStringWithoutClear()`：

```csharp
TextObject unbound = new TextObject("{=my_unbound}leader={HERO.NAME} end");
Debug.Print("unbound = '" + unbound.ToString() + "'", 0);
```

用数字字段做条件，绕开 `RawValue` 为 null 导致的「永远为假」：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.Localization;

// AGE 只在 includeDetails: true 时才绑（StringHelpers.cs:70-72），默认 false 时 {HERO.AGE} 取不到值
TextObject gate = new TextObject("{=my_gate}{?HERO.AGE > 30}veteran{?}rookie{\\?}");
gate.SetCharacterProperties("HERO", Hero.MainHero.CharacterObject, includeDetails: true);
Debug.Print("gate = " + gate.ToString(), 0);
```

## 风险与边界

- **`internal`，编译期不可引用。**
- **字段不是全都绑上的。** `StringHelpers.GetCharacterProperties`（`StringHelpers.cs:54`）无条件绑 `NAME` / `GENDER` / `LINK`（`:57-59`），`FIRSTNAME` 只在 `character.IsHero` 时绑（`:62`），而 `AGE` / `FACTION` / `CLAN` **只在 `includeDetails: true` 时绑**（`:70-72`）。**`TextObject.SetCharacterProperties` 的默认参数是 `includeDetails: false`——不显式传 true，`{HERO.AGE}` 取不到值。**
- **`RawValue` 是 null。** 唯一构造器（`QualifiedIdentifierExpression.cs:13-16`）不写它。**后果：① `EvaluateAsNumber` 兜底给 0，限定名当条件恒假；② 任何读 `RawValue` 的排错/日志代码在限定名节点上会拿到 null。**
- **名字写错是静默的。** `Tokenizer.cs:46` 的正则要求 `A.B` 两段都以字母或 `_` 开头。**写成 `{HERO.}`、`{HERO.NAME.AGE}`、`{.NAME}` 都匹配不上**，tokenizer 匹配失败 → `Tokenizer.cs:88` 清空 token 列表 → **整句只剩出错点之前的文字。**
- **左半段必须能独立解引用。** `TextProcessingContext.cs:201` 要求前一段结果 `!IsEmpty()`，否则链断在那一层，后续段全部失效。
- **返回拍平后的字符串。** `.ToStringWithoutClear()`（`TextObject.cs:212`）保留语言缓存不清，但 `TextObject` 实例本身没了。
- **`IdentifierName` 没有消费点。** 别指望引擎内部读它。

## 参见

- 取值方：[TextProcessingContext](../TextProcessingContext/)（`GetQualifiedVariableValue` 第 189-206 行，`GetVariableValueAsTextObject` 在 `:194` 被调用）
- 分词与构造：[Tokenizer](../Tokenizer/)（`:46` 的 `QualifiedIdentifier` 规则）、[MBTextParser](../MBTextParser/)（`:46` 构造、`:491` 认可）、[TokenType](../TokenType/)
- 契约与兄弟：[TextExpression](../TextExpression/)、[SimpleExpression](../SimpleExpression/)（花括号壳）、[VariableExpression](../VariableExpression/)（不带点的普通变量）、[SimpleText](../SimpleText/)
- 字段提供者：`TextObjectExtensions.SetCharacterProperties`（`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Extensions/TextObjectExtensions.cs:9`，属 `TaleWorlds.CampaignSystem` 命名空间）转调 `StringHelpers.SetCharacterProperties`（`Helpers/StringHelpers.cs:94`）→ `GetCharacterProperties`（`:54`）把 `NAME`/`GENDER`/`LINK` 绑到 `HERO` 上
- 真实用例出处：`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/Helpers/FactionHelper.cs:634`
- 桶首页：[localization API 分区](../)