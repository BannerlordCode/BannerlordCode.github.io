---
title: "ApplicationVersionJsonConverter"
description: "A Newtonsoft JsonConverter subclass that serialises ApplicationVersion as the single _version string field, {\"_version\":\"v1.2.3.4\"}. It takes effect automatically through the [JsonConverter] attribute on ApplicationVersion. The read path performs no type checking and no missing-field handling: a bare JSON string or an absent _version key both end in an exception."
---

# ApplicationVersionJsonConverter

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class ApplicationVersionJsonConverter : JsonConverter`
**Base:** `JsonConverter`
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/ApplicationVersionJsonConverter.cs`

## Overview

`ApplicationVersionJsonConverter` is the **Newtonsoft JSON codec adapter** for the [ApplicationVersion](../ApplicationVersion) struct. It exists for exactly one reason: `ApplicationVersion` is a value type with private setters, and Newtonsoft's default behaviour would reflect over its five properties and write an object, whereas the official wire format for a version is **a single string field** `{ "_version": "v1.2.3.4" }`. This converter is the rule that produces that single string.

It takes effect **automatically** through the type attribute `[JsonConverter(typeof(ApplicationVersionJsonConverter))]` at `ApplicationVersion.cs:8` — anywhere that type is serialised, this converter runs, with no manual registration. Twenty-eight lines of code, four members, all of them `override`s, and **not one of them invented by this type**.

## Mental Model

Treat it as **a custom serialiser that squashes a version number into one JSON string**, not as a utility class. It holds no state, has no lifecycle, and exposes no API of its own — **all four methods are `override`s, and none of them is native to this type**.

**The centre of the mental model is that `_version` is a hard-coded contract.** `WriteJson` (`:19-25`) unconditionally emits:

```csharp
JProperty content = new JProperty("_version", ((ApplicationVersion)value).ToString());
JObject jObject = new JObject();
jObject.Add(content);
jObject.WriteTo(writer);
```

So the serialised output is **always** a JSON object with exactly one key, `_version`, and **there is not a single configurable knob** — you cannot rename the key, add a field, or emit a bare string.

**The second anchor is that the read path validates nothing, three times over.** `ReadJson` (`:14-17`) is two lines:

```csharp
return ApplicationVersion.FromString((string?)JObject.Load(reader)["_version"]);
```

Three problems in order. **First, it unconditionally calls `JObject.Load(reader)`** — so **the input must be a JSON object**. If the version appears as a bare string `"v1.2.3"` with no braces, `JObject.Load` throws `JsonReaderException` rather than handing you a value. **Second, indexing `["_version"]` for a key that is not there returns null**, and `(string?)null` is then passed into `ApplicationVersion.FromString(null)`, which immediately throws `NullReferenceException` at `versionAsString.Split(...)`. **There is no "missing field means default" branch.** **Third, the string it produces is handed straight to `FromString`**, which itself throws a bare `Exception("Wrong version as string")` — so a malformed version string fails the whole deserialisation instead of degrading gracefully.

**The third anchor is that `CanConvert` does not match what the converter can actually do.** `CanConvert` (`:9-11`) is `typeof(ApplicationVersion).IsAssignableFrom(objectType)` — **a loose is-a test rather than an exact equality test**. It is true for `ApplicationVersion` itself, and also true for any subclass. **But `WriteJson` performs a hard cast, `((ApplicationVersion)value)`, so a subclass instance throws `InvalidCastException` there.** That is the subtlest inconsistency on this page.

## Key Members

| Member | Signature | What this member is for |
| --- | --- | --- |
| `CanWrite` | `public override bool CanWrite => true;` | Constantly true, so writing is allowed. **Note this is not the same as `CanRead`** — `JsonConverter.CanRead` is an abstract on the base class, implemented by Newtonsoft itself, and this type does not override it explicitly. |
| `CanConvert` | `public override bool CanConvert(Type objectType)` | Tests with `IsAssignableFrom`, so **it also returns true for subclasses**. But `WriteJson` hard-casts `((ApplicationVersion)value)`, so **a subclass instance throws `InvalidCastException` here**. |
| `ReadJson` | `public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)` | Loads the JSON object, indexes `["_version"]`, casts to string, and hands it to `ApplicationVersion.FromString`. **The input must be a JSON object; a missing key propagates a null into `FromString` and throws `NullReferenceException`; a malformed value makes `FromString` throw a bare `Exception`.** |
| `WriteJson` | `public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)` | Unconditionally writes `new JProperty("_version", ((ApplicationVersion)value).ToString())`, wraps it in a `JObject`, and calls `WriteTo(writer)`. **The key name, the shape, and the field count are all hard-coded and non-configurable.** |
| (binding mechanism) `[JsonConverter]` | `[JsonConverter(typeof(ApplicationVersionJsonConverter))]`, at `ApplicationVersion.cs:8` | **The entire reason this class takes effect.** The attribute sits on the `ApplicationVersion` type declaration, so every `JsonConvert.SerializeObject` / `DeserializeObject` touching that type routes through this converter — **no `JsonSerializerSettings.Converters.Add(...)` required.** |
| (companion attribute) `[JsonIgnore]` | one on each of the five properties, `ApplicationVersion.cs:13-31` | `Empty` / `ApplicationVersionType` / `Major` / `Minor` / `Revision` / `ChangeSet` are all marked `[JsonIgnore]`. **This is mandatory** — otherwise Newtonsoft would also emit the object-shaped fields alongside the `_version` string. |

## Real Example

Because the attribute binds automatically, the commonest use is just serialising — **there is nothing to register**:

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

The read path's failure modes — the most valuable block on this page:

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

## Risks and Boundaries

- **The input must be a JSON object.** `ReadJson` unconditionally calls `JObject.Load(reader)`. If a config file or save writes the version as a bare string `"v1.2.3"`, deserialisation throws `JsonReaderException` outright.
- **A missing key means `NullReferenceException`.** Indexing `["_version"]` for an absent key returns null, and that null reaches `FromString`, which crashes at `versionAsString.Split(...)`. **There is no "missing field falls back to a default" branch.**
- **A malformed value throws a bare `Exception`, not a `JsonException`.** `FromString`'s `throw new Exception("Wrong version as string")` passes straight through `catch (JsonException)`. **A `catch (JsonException)` alone is not enough.**
- **`CanConvert` is more permissive than the converter's actual ability.** It uses `IsAssignableFrom` and so returns true for `ApplicationVersion` subclasses; but `WriteJson` hard-casts, so **a subclass instance throws `InvalidCastException`.**
- **The output shape is entirely hard-coded.** Always a single-key object containing `_version`, with **no involvement from `NullValueHandling`, `DefaultValueHandling`, or `ReferenceLoopHandling`.** To emit a bare string or extra fields you must write your own converter.
- **`CanWrite` is constantly true, but `CanRead` is not explicitly overridden.** `CanRead` is handled by the `JsonConverter` base class, so its behaviour depends on the Newtonsoft version in play.
- **It delegates all formatting to `ToString()` and `FromString()`.** This type formats nothing itself, so **it inherits every defect of those two methods** — including `Invalid`'s `"i"` prefix making `Empty` serialise as `i-1.-1.-1.-1`.
- **It depends on Newtonsoft's `JObject` / `JProperty` / `JReader`.** That assembly ships with the game, but **a trimmed build or a server-side cut without Newtonsoft will fail at type load** — a `TypeLoadException`, not a graceful degradation.
- **It does not affect the `BinaryReader` / `BinaryWriter` path.** If the version travels over a binary save channel (compare `FromParametersFile` on the [ApplicationVersion](../ApplicationVersion) page), this converter is not involved at all.
- **You cannot change it, because the attribute binds it.** Unless you append your own converter of the same type to your own settings list (Newtonsoft's last-one-wins), every serialisation goes through it.

## Cross-Version Notes

`ApplicationVersionJsonConverter.cs` is 28 lines with 4 members in 1.4.5, in original-source form. Later 1.4.x releases moved the game off Newtonsoft onto an in-house JSON layer, and **this type does not exist on that path** — if your target version no longer depends on Newtonsoft, this entire page is void and you should look up that version's version-number serialisation instead. **If the target version still uses Newtonsoft, two things are genuinely worth checking**: whether `ReadJson` has switched from `JObject.Load` to `JToken.Load` (the change that would tolerate bare-string input, and the most likely thing to have been fixed), and whether the `[JsonConverter]` attribute is still present at `ApplicationVersion.cs:8` — **if it has been removed, this type becomes an ordinary class you must register by hand, and all existing code silently falls back to default object serialisation, changing the save format.**

## Dependencies

- Host type: [ApplicationVersion](../ApplicationVersion)'s type attribute `[JsonConverter(typeof(ApplicationVersionJsonConverter))]` (`ApplicationVersion.cs:8`), the only reason this class takes effect
- Companion attributes: `[JsonIgnore]` on each of `ApplicationVersion`'s five public properties (`:13-31`), which prevents default object serialisation
- Newtonsoft base class: `JsonConverter` (from `Newtonsoft.Json`), which supplies the `CanRead` / `CanWrite` / `CanConvert` / `ReadJson` / `WriteJson` members
- Newtonsoft support types: `JObject.Load`, `JObject.Add`, `JProperty`, `JObject.WriteTo`, `JsonReaderException` (from `Newtonsoft.Json.Linq` / `Newtonsoft.Json`)
- Delegated formatting: [ApplicationVersion](../ApplicationVersion)'s `ToString()` on the write side and `FromString()` on the read side — this type interprets no format itself
- Stage enum: [ApplicationVersionType](../ApplicationVersionType) determines the leading letter of `ToString()`, and therefore the value stored in `_version`
- Bucket index: [core-extra API section](../)