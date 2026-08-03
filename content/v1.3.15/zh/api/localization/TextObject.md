---
title: "TextObject"
description: "Bannerlord 本地化文本的值与变量容器：保存文本 ID、延迟解析变量，并在当前语言中生成最终字符串。"
---
# TextObject

**Namespace:** `TaleWorlds.Localization`  
**Module:** `TaleWorlds.Localization`  
**Type:** `public class TextObject`  
**Base:** `System.Object`  
**Source:** `TaleWorlds.Localization/TaleWorlds.Localization/TextObject.cs`

## 概述

`TextObject` 不是已经渲染好的 `string`，而是一个可保存、可复制、带变量的本地化文本对象。`Value` 保存文本值或 `{=id}...` 本地化 key，`Attributes` 保存 `{NAME}` 等变量。调用 `ToString()` 时，`MBTextManager` 才按当前语言解析文本并生成显示字符串。

## 心智模型

把它分成三层：

1. 模板层：`new TextObject("{=mod_welcome}Welcome, {HERO}.")` 保存 key/默认文本。
2. 变量层：`SetTextVariable` 把字符串、数字或另一个 `TextObject` 放入 `Attributes`。
3. 渲染层：`ToString()`/`ToStringWithoutClear()` 交给 `MBTextManager` 处理当前语言和嵌套变量。

源码也把 `Value` 标为 `[SaveableField(1)]`、`Attributes` 标为 `[SaveableProperty(2)]`；`SaveableLocalizationTypeDefiner` 注册 `TextObject` 和 `Dictionary<string, TextObject>` 容器。因此 TextObject 可作为战役对象、行为数据或其他保存类的成员，但变量值仍必须属于可保存对象图。

## 何时使用 / 何时不要使用

使用 `TextObject` 传递要延迟本地化的 UI、通知、对话和名称；使用 `string` 只在 API 明确需要最终语言文本时。不要把 `ToString()` 的结果再当模板修改，也不要把同一个可变模板共享给多个调用者后直接设置变量。

## 创建与变量

```csharp
Hero hero = MBObjectManager.Instance.GetObject<Hero>("main_hero");
TextObject message = new TextObject("{=my_mod_welcome}Welcome, {HERO}. You have {COUNT} relics.");
message.SetTextVariable("HERO", hero?.Name ?? new TextObject("{=my_mod_unknown}unknown hero"));
message.SetTextVariable("COUNT", 3);

string localizedMessage = message.ToString();
InformationManager.DisplayMessage(new InformationMessage(localizedMessage));
```

`SetTextVariable` 有 `TextObject`、`string`、`int` 和 `float` 重载；浮点重载会按指定小数位四舍五入。变量名必须与模板中的 token 一致，嵌套 `TextObject` 会在最终解析时继续展开。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `Value` | 原始文本、默认文本或 `{=id}` key |
| `Attributes` | 变量字典；属性 setter 为 private |
| `Length` | `Value` 的长度，不是最终本地化文本长度 |
| `IsLink` | 是否以 `{=!}{.link}` 开头 |
| `GetEmpty()` / `IsEmpty()` / `IsNullOrEmpty()` | 创建和判定空文本 |
| `ToString()` | 解析当前语言并生成显示字符串 |
| `ToStringWithoutClear()` | 解析但使用不清理的处理路径 |
| `CacheTokens()` | 为当前活动语言预先建立 token 缓存 |
| `GetID()` | 读取 `Value` 开头 `{=id}` 中的 ID |
| `CopyTextObject()` | 复制值和属性字典，适合修改模板副本 |
| `GetVariableValue(...)` | 读取一个变量并转为 `TextObject` |
| `AddIDToValue(string)` | 为没有 key 的值添加本地化 ID |

## 真实示例：复制模板再修改

同一个 `TextObject` 的 `Attributes` 是可变字典。要根据不同势力产生多条消息，先复制：

```csharp
TextObject warTemplate = new TextObject("{=my_mod_war}War with {FACTION}");
TextObject khuzaitMessage = warTemplate.CopyTextObject();
TextObject khuzaitName = new TextObject("Khuzait");
khuzaitName.AddIDToValue("my_mod_khuzait");
khuzaitMessage.SetTextVariable("FACTION", khuzaitName);

TextObject vlandianMessage = warTemplate.CopyTextObject();
TextObject vlandianName = new TextObject("Vlandia");
vlandianName.AddIDToValue("my_mod_vlandia");
vlandianMessage.SetTextVariable("FACTION", vlandianName);

InformationManager.DisplayMessage(new InformationMessage(khuzaitMessage.ToString()));
InformationManager.DisplayMessage(new InformationMessage(vlandianMessage.ToString()));
```

`AddIDToValue` 修改对象自身的 `Value`，因此放在副本上。若要给对象保存的默认文本加入 ID，也可以在构造后调用它；已经以 `{=` 开头的值不会重复添加。

## 存档与加载

`TextObject` 自己已由 `SaveableLocalizationTypeDefiner` 定义，`Value` 和 `Attributes` 会进入对象图。自定义类可以直接保存它：

```csharp
public sealed class RelicNotification
{
    [SaveableProperty(1)]
    public TextObject Message { get; private set; }

    public RelicNotification(TextObject message)
    {
        Message = message;
    }
}

public sealed class RelicNotificationDefiner : SaveableTypeDefiner
{
    public RelicNotificationDefiner() : base(910100) { }

    protected override void DefineClassTypes()
    {
        AddClassDefinition(typeof(RelicNotification), 1);
    }
}
```

存档会保存模板值和变量对象；语言切换后，缓存 token 会按活动语言重新生成。不要保存已经调用 `ToString()` 得到的 string 来代替 `TextObject`，否则会把旧语言的结果固定下来。

## 风险与崩溃边界

- **变量缺失或名字拼错。** `{HERO}` 与 `"Hero"` 是不同 key，最终文本可能保留 token 或显示错误。集中定义 token 名称并对关键变量做测试。
- **共享模板被污染。** `SetTextVariable` 修改 `Attributes`；不要把同一个实例交给多个系统后再原地改变量，使用 `CopyTextObject`。
- **递归变量过深。** `GetDepth(maxDepth)` 存在就是为了限制嵌套检查；让变量图保持有向且浅，避免自引用或循环文本。
- **过早渲染。** 在本地化表或活动语言准备前调用 `ToString`，得到的可能是默认值、错误占位或当前语言缓存；尽量把 `TextObject` 传到真正显示的边界。
- **保存错误的变量对象。** `Attributes` 的值也要能被保存系统定义；临时 UI 控件、场景对象和不可序列化句柄不能放入其中。
- **错误地依赖 HashCode。** `GetHashCode` 使用内部实例 ID，不是文本内容 hash；不要把它当持久键或跨加载身份。

## 跨版本提示

1.3.15 与 1.4.5 都有 `Value`、`Attributes`、变量重载、复制、ID 读取和保存回调。源码细节可增加，但跨版本 mod 应使用最小公共 API；`Format(float)` 依赖 `A0` 变量约定，不如显式 `SetTextVariable` 清晰。

## 依赖关系与导航

- 解析器：[MBTextManager](../MBTextManager/) 负责语言、token 和最终字符串。
- 保存：[SaveableFieldAttribute](../../save-system/SaveableFieldAttribute/) / [SaveablePropertyAttribute](../../save-system/SaveablePropertyAttribute/) 与 `SaveableLocalizationTypeDefiner` 定义对象图。
- 常见来源：[Hero](../../campaign/Hero/) 和 [ItemObject](../../core/ItemObject/) 的 `Name` 通常返回 `TextObject`。
- 运行时通知：[CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase/) 或 UI 层在正确生命周期显示文本。

- 父级：[localization API](./)
- 同级：[MBTextManager](../MBTextManager/)
- 相关：[SaveablePropertyAttribute](../../save-system/SaveablePropertyAttribute/) · [IDataStore](../../campaign-ext/IDataStore/)
