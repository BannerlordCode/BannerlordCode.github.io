---
title: "ApplicationVersionJsonConverter"
description: "Newtonsoft 的 JsonConverter 子类，把 ApplicationVersion 序列化成 { \"_version\": \"v1.2.3.4\" } 这个单一字符串字段。它靠 ApplicationVersion 类型上的 [JsonConverter] 特性自动生效，也可以手动注册。读端不校验类型、不校验字段缺失，缺 _version 会返回 null 字符串。"
---

# ApplicationVersionJsonConverter

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class ApplicationVersionJsonConverter : JsonConverter`
**Base:** `JsonConverter`
**File:** `TaleWorlds.Library/ApplicationVersionJsonConverter.cs`

## 概述

`ApplicationVersionJsonConverter` 是 [ApplicationVersion](../ApplicationVersion) 结构体的 **Newtonsoft JSON 编解码适配器**。它存在的唯一原因是：`ApplicationVersion` 是一个带私有 setter 的值类型，Newtonsoft 默认会用反射把它的五个属性逐个写成对象，而官方希望存档与配置文件里的版本号是**一个字符串字段** `{ "_version": "v1.2.3.4" }`。这个转换器就是那个「一个字符串」的规则。

它通过 [ApplicationVersion](../ApplicationVersion) 上的类型特性 `[JsonConverter(typeof(ApplicationVersionJsonConverter))]`（`ApplicationVersion.cs:8`）**自动生效**——任何地方序列化该类型都会走它，不需要手动注册。28 行代码、4 个成员，全部是 `JsonConverter` 的抽象方法覆写。

## 心智模型

把它当成**「把一个版本号压成一行 JSON 字符串」的自定义格式器**，而不是一个「工具类」。它没有任何状态、没有生命周期、没有任何自有 API——**全部四个方法都是 `override`**，且**没有一个是本类型发明的**。

**心智模型的核心是「`_version` 这个键名是硬编码的契约」。** `WriteJson`（`:19-25`）无条件写死：

```csharp
JProperty content = new JProperty("_version", ((ApplicationVersion)value).ToString());
JObject jObject = new JObject();
jObject.Add(content);
jObject.WriteTo(writer);
```

所以这个类型的序列化产物**永远**是一个只含 `_version` 单键的 JSON 对象，**没有任何可配置项**——不能改键名，不能加字段，不能输出成裸字符串。

**第二个心智锚点是读端的三处「不校验」。** `ReadJson`（`:14-17`）只有两行：

```csharp
return ApplicationVersion.FromString((string?)JObject.Load(reader)["_version"]);
```

三个问题依次是。**第一，它无条件 `JObject.Load(reader)`** —— 也就是说**输入必须是 JSON 对象**。如果 JSON 里这个版本号是裸字符串 `"v1.2.3"`（没有花括号），`JObject.Load` 会抛 `JsonReaderException`，而不是给你一个值。**第二，`["_version"]` 索引出错的键名时返回 null**，然后 `(string?)null` 传给 `ApplicationVersion.FromString(null)` —— 后者立刻在 `versionAsString.Split(...)` 上抛 `NullReferenceException`。**没有「字段缺失就返回默认值」的分支。** 第三，**它读出字符串后立刻交给 `FromString`**，而 `FromString` 本身会抛裸 `Exception("Wrong version as string")`——所以格式错误的版本串会让整个反序列化失败，而不是降级。

**第三个锚点是 `CanConvert` 与实际能力不匹配。** `CanConvert`（`:9-11`）是 `typeof(ApplicationVersion).IsAssignableFrom(objectType)`——**这是一个宽松的 is-a 判断，而不是精确的相等判断**。它对 `ApplicationVersion` 本身为真；对它的子类也为真。**但本转换器内部是硬转型 `((ApplicationVersion)value)`**，遇到子类对象时会抛 `InvalidCastException`。这是本页最微妙的一处不一致。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `CanWrite` | `public override bool CanWrite => true;` | 恒为 true，允许写。**注意它与 `CanRead` 不是一回事**——`JsonConverter.CanRead` 是基类的 abstract，必须由 Newtonsoft 自己实现，本类型没有显式覆写它。 |
| `CanConvert` | `public override bool CanConvert(Type objectType)` | 用 `IsAssignableFrom` 判断，**对子类也返回 true**。但 `WriteJson` 里是硬转型 `((ApplicationVersion)value)`，**子类对象会在这里抛 `InvalidCastException`**。 |
| `ReadJson` | `public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)` | `JObject.Load(reader)` 取 `["_version"]`，强转 string 后交给 `ApplicationVersion.FromString`。**输入必须是 JSON 对象；键名缺失会一路传到 `FromString(null)` 并抛 `NullReferenceException`；格式错误由 `FromString` 抛裸 `Exception`。** |
| `WriteJson` | `public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)` | 无条件写 `new JProperty("_version", ((ApplicationVersion)value).ToString())`，包进一个 `JObject` 后 `WriteTo(writer)`。**键名、形状、字段数全部硬编码，不可配置。** |
| （绑定方式）`[JsonConverter]` | `[JsonConverter(typeof(ApplicationVersionJsonConverter))]`，`ApplicationVersion.cs:8` | **这是它生效的全部原因。** 特性加在 [ApplicationVersion](../ApplicationVersion) 的类型声明上，所以任何 `JsonConvert.SerializeObject` / `DeserializeObject` 碰到该类型都会自动走本转换器，**不需要 `JsonSerializerSettings.Converters.Add(...)`。** |
| （配套特性）`[JsonIgnore]` | 五个属性各一个，`ApplicationVersion.cs:13-31` | `Empty` / `ApplicationVersionType` / `Major` / `Minor` / `Revision` / `ChangeSet` 全部标了 `[JsonIgnore]`。**这是必须的**——否则 Newtonsoft 会同时输出对象形式的字段，与 `_version` 字符串并存。 |

## 真实示例

因为特性自动绑定，最常见的用法就是直接序列化——**不需要注册任何东西**：

```csharp
// The [JsonConverter] attribute on ApplicationVersion makes this automatic.
// No JsonSerializerSettings.Converters.Add(...) call is needed.
string json = JsonConvert.SerializeObject(ApplicationVersion.FromString("v1.2.3.4"));
Debug.Print(json, 0);
// {"_version":"v1.2.3.4"}

ApplicationVersion parsed = JsonConvert.DeserializeObject<ApplicationVersion>(json);
Debug.Print("parsed = " + parsed, 0);
Debug.Print("stage  = " + parsed.ApplicationVersionType, 0);

// ApplicationVersion.Empty serialises to the i-1.-1.-1.-1 shape, because
// GetPrefix(Invalid) returns "i".
Debug.Print("empty json = " + JsonConvert.SerializeObject(ApplicationVersion.Empty), 0);
```

读端的失败模式——这是本页最值得记住的一段：

```csharp
public static class VersionJsonReader
{
    public static ApplicationVersion TryReadSafe(string json)
    {
        // 1. A bare JSON string is not an object: JObject.Load inside ReadJson
        //    throws JsonReaderException, because the converter hard-codes
        //    JObject.Load(reader).
        if (!json.TrimStart().StartsWith("{"))
        {
            Debug.Print("not a JSON object, the converter cannot read this", 0);
            return ApplicationVersion.Empty;
        }

        try
        {
            return JsonConvert.DeserializeObject<ApplicationVersion>(json);
        }
        catch (JsonException)
        {
            // 2. A wrong segment count makes FromString throw a bare
            //    Exception("Wrong version as string"), not a JsonException.
            Debug.Print("malformed version string", 0);
            return ApplicationVersion.Empty;
        }
        catch (Exception)
        {
            // 3. A missing "_version" key yields null, and FromString(null) throws
            //    NullReferenceException. Also caught here.
            Debug.Print("missing _version key", 0);
            return ApplicationVersion.Empty;
        }
    }

    // Reproducing the write side: the shape is hard-coded and non-configurable.
    public static string Write(ApplicationVersion version)
    {
        JObject payload = new JObject();
        payload.Add(new JProperty("_version", version.ToString()));
        return payload.ToString();
    }
}
```

## 风险与边界

- **输入必须是 JSON 对象。** `ReadJson` 无条件 `JObject.Load(reader)`。如果配置或存档里版本号写成了裸字符串 `"v1.2.3"`，反序列化直接抛 `JsonReaderException`。
- **键名缺失 = `NullReferenceException`。** `["_version"]` 取不到时索引器返回 null，`(string?)null` 传进 `FromString` 后在 `versionAsString.Split(...)` 上崩。**没有「缺字段就用默认值」的分支。**
- **格式错误抛的是裸 `Exception`，不是 `JsonException`。** `FromString` 的 `throw new Exception("Wrong version as string")` 会穿透 `catch (JsonException)`。**只用 `catch (JsonException)` 兜不住的。**
- **`CanConvert` 比实际能力宽松。** 它用 `IsAssignableFrom`，对 `ApplicationVersion` 的子类返回 true；但 `WriteJson` 是硬转型 `((ApplicationVersion)value)`，**子类对象在这里抛 `InvalidCastException`**。
- **输出形状完全硬编码。** 永远是一个只含 `_version` 的单键对象，**没有 `NullValueHandling`、没有 `DefaultValueHandling`、没有 `ReferenceLoopHandling` 的介入空间**。想输出裸字符串或多个字段，只能自己写一个转换器。
- **`CanWrite` 恒 true 但 `CanRead` 未显式覆写。** `CanRead` 由基类 `JsonConverter` 处理，行为依赖 Newtonsoft 版本。
- **强依赖 `ApplicationVersion.ToString()` 与 `FromString()`。** 本类型不做任何格式化。**所以它继承了那两个方法的全部缺陷**——包括 `Invalid` 前缀是 `"i"` 导致 `Empty` 序列化成 `i-1.-1.-1.-1`。
- **依赖 Newtonsoft 的 `JObject` / `JProperty` / `JReader`。** 这个程序集在游戏里可用，但**某些精简构建或服务端裁剪可能不带 Newtonsoft**——那时类型引用本身会 `TypeLoadException`。
- **它不影响 `BinaryReader` / `BinaryWriter` 路径。** 版本号如果走的是二进制存档通道（见 [ApplicationVersion](../ApplicationVersion) 的 `FromParametersFile`），本转换器完全不参与。
- **特性绑定意味着你改不掉它。** 除非你在自己的 settings 里显式加一个同类型转换器到列表末尾（Newtonsoft 的列表后者优先），否则所有序列化都会走它。

## 怎么用

### 怎么拿到它

`public class ApplicationVersionJsonConverter : JsonConverter`（`TaleWorlds.Library/ApplicationVersionJsonConverter.cs:7`）。**你永远不需要 new 它**——生效方式是特性绑定：`[JsonConverter(typeof(ApplicationVersionJsonConverter))]` 加在 [ApplicationVersion](../ApplicationVersion) 的类型声明上（`ApplicationVersion.cs:8`），所以任何 `JsonConvert.SerializeObject` / `DeserializeObject` 碰到那个类型都会自动走它，不需要往 `JsonSerializerSettings.Converters` 里 Add。

### 典型用法

上面「真实示例」两段是「直接序列化」和「读端的失败模式」。它的写端形状（键名固定为 `_version`、字段数固定为一个）**不可配置**，所以当你的清单需要不同键名时，正确做法是绕开它，用 `string` 接再自己转：

```csharp
public class MyModManifest
{
    // 故意用 string：转换器只认 "_version" 这一个键，而且写死的
    [JsonProperty("min_game_version")]
    public string MinGameVersion { get; set; }
}

public static class ManifestReader
{
    public static bool TryReadMinVersion(string json, out ApplicationVersion min)
    {
        min = ApplicationVersion.Empty;

        var manifest = JsonConvert.DeserializeObject<MyModManifest>(json);
        if (manifest == null || manifest.MinGameVersion == null)
        {
            return false;
        }
        // 段数不对时 FromString 抛的是裸 Exception("Wrong version as string")
        min = ApplicationVersion.FromString(manifest.MinGameVersion);
        return true;
    }
}
```

与上面「真实示例」的差别：那里走的是**强类型**路径——`DeserializeObject<ApplicationVersion>` 让特性自动接管，你拿到的是对象；这里走的是**弱类型**路径——自己的 DTO 决定键名与形状，转换器完全不参与，转换只剩下一句 `FromString`。选哪条取决于你的清单格式是不是恰好就是 `{ "_version": "v1.2.3" }`。

### 最容易踩的坑

**输入必须是 JSON 对象。** `ReadJson` 无条件 `JObject.Load(reader)`。如果配置或存档里版本号写成了裸字符串 `"v1.2.3"`，反序列化直接抛 `JsonReaderException`。

## 跨版本提示

`ApplicationVersionJsonConverter.cs` 在 1.4.5 是 28 行、4 个成员，是原始源码形态。1.4.x 后期版本把游戏从 Newtonsoft 迁到了自研 JSON 层，**这个类型在那条线上不复存在**——迁移时若目标版本不再依赖 Newtonsoft，本页全部内容作废，应改为查目标版本里新的版本号序列化实现。**如果目标版本仍是 Newtonsoft，那么跨版本真正要核对的是两件事**：`ReadJson` 里是否**从 `JObject.Load` 改成了 `JToken.Load`**（后者能容忍裸字符串输入，是最可能被修的一处），以及 `ApplicationVersion.cs:8` 的 `[JsonConverter]` 特性是否还在——**特性一旦被移除，本类型就成了一个需要手动注册的普通类**，而所有既有代码会静默改用对象形式的默认序列化，存档格式随之改变。

## 依赖关系

- 宿主类型：[ApplicationVersion](../ApplicationVersion) 的类型特性 `[JsonConverter(typeof(ApplicationVersionJsonConverter))]`（`ApplicationVersion.cs:8`），这是它自动生效的唯一原因
- 配套特性：`[JsonIgnore]` 标注在 `ApplicationVersion` 的五个公开属性上（`:13-31`），防止默认对象序列化
- Newtonsoft 基类：`JsonConverter`（`Newtonsoft.Json`），提供 `CanRead` / `CanWrite` / `CanConvert` / `ReadJson` / `WriteJson` 五个抽象成员
- Newtonsoft 支撑类型：`JObject.Load`、`JObject.Add`、`JProperty`、`JObject.WriteTo`、`JsonReaderException`（均在 `Newtonsoft.Json.Linq` / `Newtonsoft.Json`）
- 委托的格式化：[ApplicationVersion](../ApplicationVersion) 的 `ToString()`（写）与 `FromString()`（读），本类型不解释任何格式
- 阶段枚举：[ApplicationVersionType](../ApplicationVersionType) 决定 `ToString()` 的首字母，因而决定 `_version` 的值
- 桶首页：[core-extra API 分区](../)