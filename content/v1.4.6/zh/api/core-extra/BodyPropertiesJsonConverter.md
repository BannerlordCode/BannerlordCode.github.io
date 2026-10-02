---
title: "BodyPropertiesJsonConverter"
description: "让 BodyProperties 结构体能进 Newtonsoft JSON 的转换器：读写都压成 {\"_data\": \"<BodyProperties XML 串>\"} 一个字段。"
---
# BodyPropertiesJsonConverter

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class BodyPropertiesJsonConverter : JsonConverter`
**Base:** `Newtonsoft.Json.JsonConverter`
**File:** `TaleWorlds.Core/BodyPropertiesJsonConverter.cs`

## 概述

整个文件只有 40 行左右，一个 `JsonConverter` 派生类。`BodyProperties` 是**结构体**且内部有一个 128 位的 [StaticBodyProperties](../StaticBodyProperties)，Newtonsoft 对它既没有内建支持也没有可用的无参构造路径，所以需要这个转换器绕过默认契约。

它的做法非常直接：**不把结构体拆成 JSON 字段，而是整体压成一条字符串**。写的时候 `[BodyProperties](../BodyProperties).ToString()` 产出的那段 `<BodyProperties … />` XML 塞进 `{"_data": "…"}`；读的时候取回 `_data` 交给 [BodyProperties](../BodyProperties).FromString 解析。

**它不需要手工注册。** [BodyProperties](../BodyProperties) 的类型声明上就带着 `[JsonConverter(typeof(BodyPropertiesJsonConverter))]`，所以任何 `JsonConvert.SerializeObject` / `DeserializeObject` 碰到 `BodyProperties` 或其派生都会自动走这里。

## 心智模型

只有两条路径，都不复杂：

1. **写**：`WriteJson(writer, value, serializer)` → `new JProperty("_data", ((BodyProperties)value).ToString())` → 塞进一个临时 `JObject` 再 `WriteTo(writer, Array.Empty<JsonConverter>())`。注意最后那个空数组——**它是刻意禁止递归的**，否则 `JObject.WriteTo` 会把外层配置里的转换器再套一遍。
2. **读**：`ReadJson(reader, objectType, existingValue, serializer)` → `JObject.Load(reader)` → 取 `["_data"]` 强转 `string` → `BodyProperties.FromString(...)` → 返回 out 参数。

**最坑的一条：`_data` 缺失时是 `NullReferenceException`，不是友好报错。** `(string)JObject.Load(reader)["_data"]` 在字段不存在时拿到 `null`，而 `BodyProperties.FromString` 的第一行是 `keyValue.StartsWith("<BodyProperties ", …)` —— 对 null 调用实例方法直接 NRE。所以**手写/外部产出的 JSON 只要少 `_data` 键，反序列化就崩在转换器里**，栈顶指向 `BodyPropertiesJsonConverter.ReadJson`，看不出是数据格式问题。

第二条：**这个类有 `CanWrite => true`，但没有任何 `null` 保护。** Newtonsoft 在遇到 `null` 值时，默认不会调 `WriteJson`（除非 `serializer.SerializeNulls` 打开）——**一旦打开，`((BodyProperties)value)` 这个拆箱对 null 就是 `NullReferenceException`。**

第三条：**`_data` 的内容是 XML 而不是 JSON 片段。** 它内部有双引号属性（`age="34"`），靠 Newtonsoft 自动转义。所以**不要手工拼这个 JSON**——让它自己序列化，或者直接用 `BodyProperties.FromString` 处理那段 XML。

第四条：`CanConvert` 用的是 `typeof(BodyProperties).IsAssignableFrom(objectType)`——**它是 `IsAssignableFrom` 而不是相等判断**，所以理论上任何 `BodyProperties` 的派生类都会被它接管（结构体目前没有派生类，所以实际就是它自己）。

常见误用：在自己的类型上照抄这个模式但忘了 `WriteTo` 里的 `Array.Empty<JsonConverter>()`（会无限递归或行为异常）；手写 JSON 少 `_data` 键；以为它会把体型拆成 `age` / `weight` / `build` 三个字段——**不会，全在一根字符串里**。

## 关键成员

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `CanConvert` | `public override bool CanConvert(Type objectType)` | `typeof(BodyProperties).IsAssignableFrom(objectType)`。**是 `IsAssignableFrom`**，派生类也会被接管。 |
| `CanWrite` | `public override bool CanWrite { get; }` | 恒为 `true`。**显式覆写，意味着「允许写」这件事无法通过继承关掉。** |
| `ReadJson` | `public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)` | `BodyProperties.FromString((string)JObject.Load(reader)["_data"], out bodyProperties)` 后返回 `bodyProperties`。**`_data` 缺失 → null → `FromString` 内部 `StartsWith` → NRE。`existingValue` 参数完全没用。** |
| `WriteJson` | `public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)` | `new JProperty("_data", ((BodyProperties)value).ToString())` → 包进 `new JObject` → `WriteTo(writer, Array.Empty<JsonConverter>())`。**`value` 为 null 且开启 `SerializeNulls` 时拆箱 NRE。`serializer` 参数完全没用。** |
| `.ctor` | `public BodyPropertiesJsonConverter()`（编译器生成） | 源码里没写构造器，用默认的无参构造。无状态，可安全复用。 |

## 真实示例

直接序列化一个 [BodyProperties](../BodyProperties)（自动生效，无需注册）：

```csharp
BodyProperties body = new BodyProperties(
    new DynamicBodyProperties(30f, 0.5f, 0.55f),
    StaticBodyProperties.GetRandomStaticBodyProperties());

string json = JsonConvert.SerializeObject(body);
Debug.Print(json, 0);
// 形态：{"_data":"<BodyProperties age=\"30\" weight=\"0.5\" build=\"0.55\" key=\"128 位十六进制\" .../>"}
```

往返一次并核对字段：

```csharp
string json = JsonConvert.SerializeObject(body);

BodyProperties restored;
BodyProperties parsed = JsonConvert.DeserializeObject<BodyProperties>(json);
restored = parsed;

Debug.Print("age=" + restored.Age + " weight=" + restored.Weight, 0);
Debug.Print("key1=" + restored.KeyPart1 + " key8=" + restored.KeyPart8, 0);
```

把转换器显式挂到 serializer settings 上（对别的含 `BodyProperties` 字段的类型同样适用）：

```csharp
JsonSerializerSettings settings = new JsonSerializerSettings();
settings.Converters.Add(new BodyPropertiesJsonConverter());

string json = JsonConvert.SerializeObject(new CharacterLookPayload { Look = body }, settings);
Debug.Print(json, 0);
```

手写 JSON 时必须带 `_data` 键，且内容是 [BodyProperties](../BodyProperties) 的 XML 串：

```csharp
string xmlFragment =
    "<BodyProperties age=\"28\" weight=\"0.5\" build=\"0.5\" " +
    "key=\"0000000000000001000000000000000200000000000000030000000000000004000000000000000500000000000000060000000000000070000000000000008\" />";

string json = "{\"_data\":" + JsonConvert.ToString(xmlFragment) + "}";

BodyProperties parsed = JsonConvert.DeserializeObject<BodyProperties>(json);
Debug.Print("age=" + parsed.Age + " key1=" + parsed.KeyPart1, 0);
```

自定义写入形状（把年龄单独提出来，`_data` 仍然保底）：

```csharp
// 读者侧演示 DTO，不是游戏 API；字段与构造仅示意承载方式
public class CharacterLookPayload
{
    public string Name;
    public BodyProperties Look;
}
```

## 风险与边界

- **`_data` 缺失即崩。** `JObject["_data"]` 返回 null → `FromString` 首行 `StartsWith` → `NullReferenceException`。**这是本转换器最常见的失败点**，且报错栈完全指不到数据源。
- **`value` 为 null 时 `WriteJson` 拆箱 NRE。** 默认配置下 Newtonsoft 会跳过 null；**一旦开了 `SerializeNulls` 就会踩到**。
- **`WriteJson` 忽略 `serializer` 参数。** 它自己造 `JObject` 并用 `Array.Empty<JsonConverter>()` 写出，**外层的 `NamingStrategy` / `DateFormatHandling` 等设置对它无效**。
- **`ReadJson` 忽略 `existingValue`。** 不支持「读到一个新值后合并进旧对象」的语义，只能整体替换。
- **`CanWrite` 硬编码为 true。** 派生这个类也没法改成只读。
- **没有 `WriteJson` 的空 `JObject` 判空。** 与上一条同源。
- **产出的是「一个字符串套一个 JSON 对象」，不是扁平字段。** 下游系统（服务端校验、日志分析）拿到的是一段 XML 转义文本，**不能按 JSON 字段路径直接取 `age`**。
- **往返依赖 `BodyProperties.ToString()` 与 `FromString` 的格式契约。** 一方改了格式串，另一方不改就静默解析失败（`FromString` 返回 false，**但 `ReadJson` 不检查返回值**——失败时它照样返回全 0 的 `bodyProperties`）。**这是静默数据丢失。**
- **`CanConvert` 用 `IsAssignableFrom`。** 给别的类型定制一个「派生即接管」的转换器时注意这个语义。
- **`BodyProperties` 上带着 `[JsonConverter(typeof(BodyPropertiesJsonConverter))]`。** 这个转换器是**自动生效**的；显式再加一次到 `settings.Converters` 会造成重复包装（写出结果相同，但多做一次转换）。**通常不需要手工注册。**

## 跨版本提示

`bannerlord-1.3.15/TaleWorlds.Core/BodyPropertiesJsonConverter.cs` 与 `bannerlord-1.4.6/TaleWorlds.Core/BodyPropertiesJsonConverter.cs` 逐行比对，**public 表面完全一致**：5 条 public 成员（`CanConvert` / `CanWrite` / `ReadJson` / `WriteJson` + 编译器生成的构造器），方法体逐字相同。`bannerlord-1.4.5/` 本机只有 DLL、无 C# 源码，未能核对。

## 依赖关系

- 唯一宿主：[BodyProperties](../BodyProperties) 的类型声明带 `[JsonConverter(typeof(BodyPropertiesJsonConverter))]`，自动生效
- 读写委托给宿主：`WriteJson` 调 [BodyProperties](../BodyProperties).ToString()，`ReadJson` 调 `BodyProperties.FromString`
- 载荷组成：那段 XML 串里的 `age` / `weight` / `build` 来自 [DynamicBodyProperties](../DynamicBodyProperties)，`key` 属性是 128 位十六进制的 [StaticBodyProperties](../StaticBodyProperties)
- 基类：`Newtonsoft.Json.JsonConverter`（`Newtonsoft.Json.dll`），源码树里随游戏一起分发 `Newtonsoft.Json/` 目录
- 桶首页：[core-extra API 分区](../)